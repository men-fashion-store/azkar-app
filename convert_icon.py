from PIL import Image
import os

# Path to the uploaded image
input_path = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\quran-icon.png.jpeg'

# Load the image
img = Image.open(input_path)

# Convert to RGBA if necessary (to support transparency)
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Create 512x512 version
img_512 = img.resize((512, 512), Image.LANCZOS)
output_path_512 = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\icon-512.png'
img_512.save(output_path_512, 'PNG')

# Create 192x192 version
img_192 = img.resize((192, 192), Image.LANCZOS)
output_path_192 = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\icon-192.png'
img_192.save(output_path_192, 'PNG')

print(f'icon-512.png created: {output_path_512}')
print(f'icon-192.png created: {output_path_192}')
print(f'Original image size: {img.size}')
