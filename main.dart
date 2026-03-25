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
        // لون أساسي للتطبيق يتماشى مع الطابع الإسلامي
        primarySwatch: Colors.teal, 
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  // قائمة بيانات الأقسام (الاسم + رابط صورة خلفية معبرة)
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
        title: const Text(
          'موسوعة المسلم',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
        // الإعدادات فوق على الجنب زي ما معتز طلب
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              print('فتح الإعدادات');
              // TODO: حط هنا كود الانتقال لصفحة الإعدادات
            },
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: GridView.builder(
          itemCount: categories.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // عرض قسمين في كل صف
            crossAxisSpacing: 12, // المسافة الأفقية
            mainAxisSpacing: 12, // المسافة الرأسية
            childAspectRatio: 0.85, // نسبة الطول للعرض
          ),
          itemBuilder: (context, index) {
            return _buildCategoryCard(categories[index]);
          },
        ),
      ),
    );
  }

  // دالة بناء الكارت المكون من (صورة + تظليل + نص)
  Widget _buildCategoryCard(Map<String, String> category) {
    return Card(
      elevation: 5,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          fit: StackFit.expand,
          children: [
            // 1. الصورة
            Image.network(
              category['image']!,
              fit: BoxFit.cover,
              loadingBuilder: (context, child, loadingProgress) {
                if (loadingProgress == null) return child;
                return const Center(child: CircularProgressIndicator()); // مؤشر تحميل للصورة
              },
            ),
            // 2. التظليل عشان الكلام الأبيض يبان بوضوح على أي صورة
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
            // 3. اسم القسم
            Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Text(
                  category['title']!,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
            // 4. تأثير الضغط عشان ينقلك للصفحة التانية
            Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () {
                  print('تم الضغط على: ${category['title']}');
                  // TODO: حط هنا كود الانتقال لصفحة القسم
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
