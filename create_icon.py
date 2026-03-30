from PIL import Image, ImageDraw, ImageFont
import os

# Create 512x512 icon
size = 512
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Colors
primary_color = (139, 90, 43)  # Brown color matching the original
secondary_color = (205, 133, 63)  # Peru color for gradient effect
bg_light = (253, 251, 247)  # Light background color from manifest

# Draw rounded rectangle background
radius = 80
corner_color = primary_color

# Draw the main rounded square
draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=primary_color)

# Add subtle gradient effect by drawing slightly smaller inner rounded rect
inner_margin = 8
draw.rounded_rectangle(
    [inner_margin, inner_margin, size - inner_margin, size - inner_margin], 
    radius=radius - 5, 
    fill=(160, 100, 50)  # Slightly lighter brown
)

# Draw Islamic crescent moon shape instead of star
moon_color = (255, 255, 255, 255)  # White

# Outer circle for crescent
moon_center_x = size // 2
moon_center_y = size // 2
moon_radius = 140
draw.ellipse(
    [moon_center_x - moon_radius, moon_center_y - moon_radius,
     moon_center_x + moon_radius, moon_center_y + moon_radius],
    fill=moon_color
)

# Inner circle (offset) to create crescent effect
inner_offset_x = 35
inner_offset_y = 0
inner_radius = 115
inner_color = (160, 100, 50)  # Same as inner background
draw.ellipse(
    [moon_center_x - inner_radius + inner_offset_x, moon_center_y - inner_radius + inner_offset_y,
     moon_center_x + inner_radius + inner_offset_x, moon_center_y + inner_radius + inner_offset_y],
    fill=inner_color
)

# Add a small circle/dot representing a star near the crescent
star_x = moon_center_x + 80
star_y = moon_center_y - 60
star_radius = 20
draw.ellipse(
    [star_x - star_radius, star_y - star_radius,
     star_x + star_radius, star_y + star_radius],
    fill=(255, 215, 0)  # Gold color for subtle star
)

# Save the image
output_path = r'c:\Users\M  E  G  A\Downloads\azkar-app-main\azkar-app-main\icon-512.png'
img.save(output_path, 'PNG')

print(f'Icon saved to: {output_path}')
print(f'Size: {img.size}')
