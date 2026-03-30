from PIL import Image
import os

# Path to the icon image
icon_path = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\icon-512.png'
android_res_path = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\android\app\src\main\res'

if not os.path.exists(icon_path):
    print(f"Error: Icon not found at {icon_path}")
    exit(1)

img = Image.open(icon_path)

# Define target sizes for each mipmap folder
# Format: (folder_name, size)
mipmap_configs = [
    ('mipmap-mdpi', 48),
    ('mipmap-hdpi', 72),
    ('mipmap-xhdpi', 96),
    ('mipmap-xxhdpi', 144),
    ('mipmap-xxxhdpi', 192)
]

for folder, size in mipmap_configs:
    dest_dir = os.path.join(android_res_path, folder)
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    
    dest_path = os.path.join(dest_dir, 'ic_launcher.png')
    
    # Resize and save
    resized_img = img.resize((size, size), Image.LANCZOS)
    resized_img.save(dest_path, 'PNG')
    print(f"Saved {size}x{size} to {folder}")

print("\nApp icons updated successfully!")
