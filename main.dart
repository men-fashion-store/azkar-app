import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  // قائمة تحتوي على بيانات كل قسم (الاسم ورابط صورة افتراضية للتجربة)
  final List<Map<String, String>> categories = [
    {'title': 'المصحف', 'image': 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=500&q=60'},
    {'title': 'الأذكار', 'image': 'https://images.unsplash.com/photo-1590076215667-875d4ef2d790?auto=format&fit=crop&w=500&q=60'},
    {'title': 'السبحة الإلكترونية', 'image': 'https://images.unsplash.com/photo-1579737976694-0130ce6f6671?auto=format&fit=crop&w=500&q=60'},
    {'title': 'مواقيت الصلاة', 'image': 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=500&q=60'},
    {'title': 'البوصلة', 'image': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=60'},
    {'title': 'أحاديث', 'image': 'https://images.unsplash.com/photo-1584281722515-321ab127ce1c?auto=format&fit=crop&w=500&q=60'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'موسوعة المسلم',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
        // نقل زر الإعدادات إلى الزاوية العلوية
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              // TODO: إضافة كود الانتقال لشاشة الإعدادات هنا
            },
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: GridView.builder(
          itemCount: categories.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // عدد الأعمدة
            crossAxisSpacing: 12, // المسافة الأفقية بين البطاقات
            mainAxisSpacing: 12, // المسافة العمودية بين البطاقات
            childAspectRatio: 0.85, // نسبة الطول للعرض للبطاقة
          ),
          itemBuilder: (context, index) {
            return _buildCategoryCard(categories[index]);
          },
        ),
      ),
    );
  }

  // دالة مساعدة لبناء تصميم كل بطاقة
  Widget _buildCategoryCard(Map<String, String> category) {
    return Card(
      elevation: 5,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          fit: StackFit.expand,
          children: [
            // 1. صورة الخلفية
            Image.network(
              category['image']!,
              fit: BoxFit.cover,
            ),
            // 2. طبقة التظليل (Gradient) لضمان وضوح النص
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
            // 3. النص (الاسم)
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
            // 4. تأثير الضغط (Ripple Effect)
            Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () {
                  // TODO: إضافة كود الانتقال للشاشة الخاصة بالقسم
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
