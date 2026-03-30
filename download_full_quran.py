import urllib.request
import json
import os

print("Downloading complete Quran data...")

# Download from API
url = "https://api.alquran.cloud/v1/quran/quran-uthmani"

try:
    print(f"Fetching from: {url}")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    with urllib.request.urlopen(req, timeout=120) as response:
        data = json.loads(response.read().decode('utf-8'))
        
        if data.get('status') == 'OK' and 'data' in data:
            surahs = data['data']['surahs']
            
            # Convert to our format
            quran_data = {"surahs": [], "totalAyahs": 6236}
            
            total_ayahs = 0
            for surah in surahs:
                verses = [ayah['text'] for ayah in surah['ayahs']]
                total_ayahs += len(verses)
                
                surah_obj = {
                    "number": surah['number'],
                    "name": surah['name'],
                    "englishName": surah['englishName'],
                    "ayahs": len(verses),
                    "type": "مكية" if surah['revelationType'] == 'Meccan' else "مدنية",
                    "verses": verses
                }
                quran_data["surahs"].append(surah_obj)
            
            quran_data["totalAyahs"] = total_ayahs
            
            # Save to assets
            output_path = r"c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\android\app\src\main\assets\quran_complete.json"
            
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(quran_data, f, ensure_ascii=False, indent=1)
            
            file_size = os.path.getsize(output_path) / (1024 * 1024)
            print(f"✓ Quran saved: {output_path}")
            print(f"✓ Total surahs: {len(quran_data['surahs'])}")
            print(f"✓ Total ayahs: {quran_data['totalAyahs']}")
            print(f"✓ File size: {file_size:.2f} MB")
        else:
            print("Error: Invalid response from API")
            
except Exception as e:
    print(f"Error: {e}")
    print("Please check your internet connection")
