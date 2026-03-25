import 'package:flutter/material.dart';

void main() {
  runApp(const MuslimApp());
}

class MuslimApp extends StatelessWidget {
  const MuslimApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'موسوعة المسلم',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        fontFamily: 'Tahoma', // يمكنك تغييره لاحقاً لخط عربي زي Cairo
      ),
      home: HomeScreen(),
    );
  }
}

// ================== الشاشة الرئيسية ==================
class HomeScreen extends StatelessWidget {
  final List<Map<String, String>> categories = [
    {'title': 'المصحف', 'image': 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=500&q=60'},
    {'title': 'الأذكار', 'image': 'https://images.unsplash.com/photo-1590076215667-875d4ef2d790?auto=format&fit=crop&w=500&q=60'},
    {'title': 'السبحة الإلكترونية', 'image': 'https://images.unsplash.com/photo-1579737976694-0130ce6f6671?auto=format&fit=crop&w=500&q=60'},
    {'title': 'مواقيت الصلاة', 'image': 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=500&q=60'},
    {'title': 'البوصلة', 'image': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=60'},
    {'title': 'أحاديث', 'image': 'https://images.unsplash.com/photo-1584281722515-321ab127ce1c?auto=format&fit=crop&w=500&q=60'},
  ];

  HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('موسوعة المسلم', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) => const SettingsScreen()));
            },
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: GridView.builder(
          itemCount: categories.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 0.85,
          ),
          itemBuilder: (context, index) {
            return _buildCategoryCard(context, categories[index]);
          },
        ),
      ),
    );
  }

  Widget _buildCategoryCard(BuildContext context, Map<String, String> category) {
    return Card(
      elevation: 5,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          fit: StackFit.expand,
          children: [
            Image.network(
              category['image']!,
              fit: BoxFit.cover,
              loadingBuilder: (context, child, loadingProgress) {
                if (loadingProgress == null) return child;
                return const Center(child: CircularProgressIndicator());
              },
            ),
            Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.black87, Colors.transparent],
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  stops: [0.0, 0.7],
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Text(
                  category['title']!,
                  style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
            Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () {
                  // نظام التوجيه بناءً على اسم القسم
                  Widget nextScreen;
                  switch (category['title']) {
                    case 'السبحة الإلكترونية':
                      nextScreen = const SebhaScreen();
                      break;
                    case 'المصحف':
                      nextScreen = const QuranScreen();
                      break;
                    case 'الأذكار':
                      nextScreen = const AzkarScreen();
                      break;
                    case 'مواقيت الصلاة':
                      nextScreen = const PrayerTimesScreen();
                      break;
                    case 'البوصلة':
                      nextScreen = const CompassScreen();
                      break;
                    case 'أحاديث':
                      nextScreen = const HadithScreen();
                      break;
                    default:
                      nextScreen = const SettingsScreen();
                  }
                  Navigator.push(context, MaterialPageRoute(builder: (context) => nextScreen));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ================== شاشة السبحة الإلكترونية (مكتملة) ==================
class SebhaScreen extends StatefulWidget {
  const SebhaScreen({Key? key}) : super(key: key);

  @override
  _SebhaScreenState createState() => _SebhaScreenState();
}

class _SebhaScreenState extends State<SebhaScreen> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('السبحة الإلكترونية')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('عدد التسبيحات', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20),
              decoration: BoxDecoration(
                color: Colors.teal.shade50,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.teal, width: 2),
              ),
              child: Text(
                '$_counter',
                style: const TextStyle(fontSize: 60, fontWeight: FontWeight.bold, color: Colors.teal),
              ),
            ),
            const SizedBox(height: 40),
            ElevatedButton(
              onPressed: _incrementCounter,
              style: ElevatedButton.styleFrom(
                shape: const CircleBorder(),
                padding: const EdgeInsets.all(60),
                backgroundColor: Colors.teal,
              ),
              child: const Text('سبّح', style: TextStyle(fontSize: 30, color: Colors.white)),
            ),
            const SizedBox(height: 30),
            TextButton.icon(
              onPressed: _resetCounter,
              icon: const Icon(Icons.refresh, color: Colors.red),
              label: const Text('تصفير العداد', style: TextStyle(color: Colors.red, fontSize: 18)),
            )
          ],
        ),
      ),
    );
  }
}

// ================== شاشات مؤقتة (Placeholders) لباقي الأقسام ==================
class QuranScreen extends StatelessWidget {
  const QuranScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('المصحف')), body: const Center(child: Text('جاري العمل على شاشة المصحف...', style: TextStyle(fontSize: 20))));
  }
}

class AzkarScreen extends StatelessWidget {
  const AzkarScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('الأذكار')), body: const Center(child: Text('جاري العمل على شاشة الأذكار...', style: TextStyle(fontSize: 20))));
  }
}

class PrayerTimesScreen extends StatelessWidget {
  const PrayerTimesScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('مواقيت الصلاة')), body: const Center(child: Text('جاري العمل على شاشة مواقيت الصلاة...', style: TextStyle(fontSize: 20))));
  }
}

class CompassScreen extends StatelessWidget {
  const CompassScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('البوصلة')), body: const Center(child: Text('جاري العمل على شاشة البوصلة...', style: TextStyle(fontSize: 20))));
  }
}

class HadithScreen extends StatelessWidget {
  const HadithScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('أحاديث')), body: const Center(child: Text('جاري العمل على شاشة الأحاديث...', style: TextStyle(fontSize: 20))));
  }
}

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('الإعدادات')), body: const Center(child: Text('شاشة الإعدادات', style: TextStyle(fontSize: 20))));
  }
}
