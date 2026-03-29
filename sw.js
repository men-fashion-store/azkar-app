// Enhanced Service Worker for Prayer Times with Professional Athan Notifications
const CACHE_NAME = 'azkar-pro-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './widget.html'
];

// Athan audio URLs for background playback
const ADHAN_URLS = {
  makkah: 'https://archive.org/download/MakkahAdhan_201901/Adhan%20Makkah.mp3',
  madinah: 'https://archive.org/download/MadinahAdhan_201901/Adhan%20Madinah.mp3',
  aqsa: 'https://archive.org/download/AdhanAqsa/Adhan%20Aqsa.mp3'
};

// Install event - cache assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch(() => null)
        )
      )
    )
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Don't cache audio files
  if (url.pathname.endsWith('.mp3') || url.pathname.endsWith('.wav') || url.pathname.endsWith('.ogg')) return;

  const apiHosts = [
    'https://api.alquran.cloud',
    'https://mp3quran.net',
    'https://www.mp3quran.net',
    'https://api.aladhan.com',
    'https://api.quran.com',
    'https://hadeethenc.com'
  ];

  if (apiHosts.some((h) => url.origin === new URL(h).origin)) {
    event.respondWith(
      caches.match(req).then((cachedRes) => {
        return (
          cachedRes ||
          fetch(req).then((fetchRes) => {
            return caches.open('quran-api-cache').then((cache) => {
              cache.put(req, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
    );
  } else {
    event.respondWith(caches.match(req).then((response) => response || fetch(req)));
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, 'quran-api-cache'];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
        })
      )
    )
  );
  self.clients.claim();
});

// Prayer times storage
let prayerTimesData = null;
let selectedMuezzin = 'makkah';
let alertsEnabled = true;

// Message handler for various operations
self.addEventListener('message', (event) => {
  const d = event.data;
  if (!d || !d.type) return;

  switch (d.type) {
    case 'SHOW_NOTIFICATION':
      if (self.registration && self.registration.showNotification) {
        event.waitUntil(
          self.registration.showNotification(d.title || 'موسوعة المسلم', {
            ...d.options,
            icon: './icon-192.png',
            badge: './icon-192.png',
            tag: d.options?.tag || 'default',
            requireInteraction: true,
            actions: [
              { action: 'open', title: 'فتح التطبيق' },
              { action: 'dismiss', title: 'إغلاق' }
            ]
          })
        );
      }
      break;

    case 'SCHEDULE_PRAYER_NOTIFICATIONS':
      if (d.prayerTimes) {
        prayerTimesData = d.prayerTimes;
        schedulePrayerNotifications();
      }
      break;

    case 'UPDATE_SETTINGS':
      if (d.muezzin) selectedMuezzin = d.muezzin;
      if (typeof d.alertsEnabled !== 'undefined') alertsEnabled = d.alertsEnabled;
      break;

    case 'PLAY_ADHAN':
      playAdhanInBackground(d.prayerName || 'الصلاة');
      break;
  }
});

// Schedule notifications for all prayers
function schedulePrayerNotifications() {
  if (!prayerTimesData || !alertsEnabled) return;

  const prayers = [
    { id: 'Fajr', name: 'الفجر' },
    { id: 'Dhuhr', name: 'الظهر' },
    { id: 'Asr', name: 'العصر' },
    { id: 'Maghrib', name: 'المغرب' },
    { id: 'Isha', name: 'العشاء' }
  ];

  prayers.forEach(prayer => {
    if (prayerTimesData[prayer.id]) {
      schedulePrayerAlarm(prayer.id, prayer.name, prayerTimesData[prayer.id]);
    }
  });
}

// Schedule individual prayer alarm
function schedulePrayerAlarm(prayerId, prayerName, timeString) {
  const now = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  
  let prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
  
  // If prayer time has passed, schedule for tomorrow
  if (prayerTime <= now) {
    prayerTime.setDate(prayerTime.getDate() + 1);
  }
  
  const delay = prayerTime.getTime() - now.getTime();
  
  // Schedule notification
  setTimeout(() => {
    showPrayerNotification(prayerName);
    playAdhanInBackground(prayerName);
  }, delay);
}

// Show prayer notification
function showPrayerNotification(prayerName) {
  if (!alertsEnabled || !self.registration) return;
  
  const dateKey = new Date().toISOString().slice(0, 10);
  const tag = `prayer-${dateKey}-${prayerName}`;
  
  self.registration.showNotification(`حان الآن وقت صلاة ${prayerName}`, {
    body: 'حان وقت الأذان 🕌',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: tag,
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
    sound: ADHAN_URLS[selectedMuezzin] || ADHAN_URLS.makkah,
    actions: [
      { action: 'open', title: 'فتح التطبيق 📱' },
      { action: 'stop_adhan', title: 'إيقاف الأذان 🔕' }
    ],
    data: {
      prayerName: prayerName,
      timestamp: Date.now()
    }
  });
}

// Play adhan in background (using Audio API if available)
let currentAdhanAudio = null;

function playAdhanInBackground(prayerName) {
  try {
    const adhanUrl = ADHAN_URLS[selectedMuezzin] || ADHAN_URLS.makkah;
    
    // Stop any currently playing adhan
    if (currentAdhanAudio) {
      currentAdhanAudio.pause();
      currentAdhanAudio = null;
    }
    
    // Create new audio instance
    currentAdhanAudio = new Audio(adhanUrl);
    currentAdhanAudio.volume = 1.0;
    
    // Attempt to play (may be blocked by browser policies)
    const playPromise = currentAdhanAudio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(e => {
        // Audio playback was blocked, notification will still show
        console.log('Adhan audio blocked by browser policy');
      });
    }
    
    // Clean up after adhan finishes (typically ~3-4 minutes)
    setTimeout(() => {
      if (currentAdhanAudio) {
        currentAdhanAudio.pause();
        currentAdhanAudio = null;
      }
    }, 300000); // 5 minutes max
    
  } catch (e) {
    console.error('Error playing adhan:', e);
  }
}

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const action = event.action;
  
  if (action === 'stop_adhan') {
    // Stop adhan playback
    if (currentAdhanAudio) {
      currentAdhanAudio.pause();
      currentAdhanAudio = null;
    }
    return;
  }
  
  // Default: open app
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const c = clientList[i];
        if (c.url && 'focus' in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow('./index.html');
    })
  );
});

// Periodic sync for prayer times (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'prayer-times-sync') {
    event.waitUntil(syncPrayerTimes());
  }
});

async function syncPrayerTimes() {
  // This will be called periodically to refresh prayer times
  // The main app will handle the actual API calls
  const clientsList = await clients.matchAll({ type: 'window', includeUncontrolled: true });
  clientsList.forEach(client => {
    client.postMessage({ type: 'REFRESH_PRAYER_TIMES' });
  });
}

// Push event handler (for server push if implemented)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'موسوعة المسلم', {
      body: data.body || '',
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: data.tag || 'push-notification',
      requireInteraction: data.requireInteraction || false,
      data: data
    })
  );
});
