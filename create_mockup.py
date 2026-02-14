from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math
import random

# --- Config ---
OUTPUT_WIDTH = 600
OUTPUT_HEIGHT = 375
SCREENSHOT_PATH = "public/images/proyects/calendar.png"
OUTPUT_PATH = "public/images/proyects/calendar_card.webp"

# --- Create gradient background ---
bg = Image.new("RGB", (OUTPUT_WIDTH, OUTPUT_HEIGHT))
draw = ImageDraw.Draw(bg)

for y in range(OUTPUT_HEIGHT):
    t = y / OUTPUT_HEIGHT
    # Deep indigo -> purple/blue gradient
    r = int(18 + t * 60)
    g = int(10 + t * 15)
    b = int(60 + t * 80)
    draw.line([(0, y), (OUTPUT_WIDTH, y)], fill=(r, g, b))

# --- Add subtle radial glow orbs ---
def draw_glow(image, cx, cy, radius, color, opacity=80):
    """Draw a soft radial glow"""
    glow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    for i in range(radius, 0, -2):
        alpha = int(opacity * (i / radius) ** 0.5 * (1 - i / radius))
        r, g, b = color
        glow_draw.ellipse(
            [cx - i, cy - i, cx + i, cy + i],
            fill=(r, g, b, max(0, alpha))
        )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=30))
    bg_rgba = image.convert("RGBA")
    bg_rgba = Image.alpha_composite(bg_rgba, glow)
    return bg_rgba

bg_rgba = draw_glow(bg, 150, 100, 300, (100, 80, 255), 60)
bg_rgba = draw_glow(bg_rgba, OUTPUT_WIDTH - 100, OUTPUT_HEIGHT - 80, 250, (180, 50, 220), 50)
bg_rgba = draw_glow(bg_rgba, OUTPUT_WIDTH // 2, OUTPUT_HEIGHT // 2, 200, (60, 120, 255), 40)

# --- Add subtle dot pattern ---
dot_layer = Image.new("RGBA", (OUTPUT_WIDTH, OUTPUT_HEIGHT), (0, 0, 0, 0))
dot_draw = ImageDraw.Draw(dot_layer)
random.seed(42)
for _ in range(80):
    x = random.randint(0, OUTPUT_WIDTH)
    y = random.randint(0, OUTPUT_HEIGHT)
    size = random.randint(1, 3)
    alpha = random.randint(15, 40)
    dot_draw.ellipse([x, y, x + size, y + size], fill=(255, 255, 255, alpha))

bg_rgba = Image.alpha_composite(bg_rgba, dot_layer)

# --- Load and process screenshot ---
screenshot = Image.open(SCREENSHOT_PATH)
# Crop to remove any browser chrome if needed - keep the app content
sw, sh = screenshot.size

# --- Browser frame dimensions ---
browser_bar_height = 36
frame_padding = 0
max_frame_width = int(OUTPUT_WIDTH * 0.78)
max_frame_height = int(OUTPUT_HEIGHT * 0.82)

# Scale screenshot to fit
available_height = max_frame_height - browser_bar_height
scale = min(max_frame_width / sw, available_height / sh)
new_sw = int(sw * scale)
new_sh = int(sh * scale)
screenshot = screenshot.resize((new_sw, new_sh), Image.LANCZOS)

frame_width = new_sw
frame_height = new_sh + browser_bar_height

# --- Create browser frame ---
frame = Image.new("RGBA", (frame_width, frame_height), (0, 0, 0, 0))
frame_draw = ImageDraw.Draw(frame)

# Browser bar background
corner_radius = 12
# Draw rounded rectangle for the entire frame
frame_draw.rounded_rectangle(
    [0, 0, frame_width - 1, frame_height - 1],
    radius=corner_radius,
    fill=(45, 45, 61, 255)
)

# Browser bar
frame_draw.rectangle([0, browser_bar_height, frame_width, frame_height], fill=(255, 255, 255, 255))
# Bottom rounded corners - draw rounded rect and clip
frame_draw.rounded_rectangle(
    [0, 0, frame_width - 1, frame_height - 1],
    radius=corner_radius,
    outline=(255, 255, 255, 20),
    width=1
)

# Traffic light dots
dot_y = browser_bar_height // 2
dot_start_x = 16
dot_spacing = 20
colors = [(255, 95, 87), (255, 189, 46), (40, 200, 64)]
for i, color in enumerate(colors):
    cx = dot_start_x + i * dot_spacing
    frame_draw.ellipse([cx - 5, dot_y - 5, cx + 5, dot_y + 5], fill=color)

# URL bar
url_bar_x = dot_start_x + 3 * dot_spacing + 15
url_bar_y = dot_y - 10
url_bar_width = frame_width - url_bar_x - 60
url_bar_height = 20
frame_draw.rounded_rectangle(
    [url_bar_x, url_bar_y, url_bar_x + url_bar_width, url_bar_y + url_bar_height],
    radius=6,
    fill=(255, 255, 255, 25)
)

# URL text
try:
    font = ImageFont.truetype("segoeui.ttf", 11)
except:
    try:
        font = ImageFont.truetype("arial.ttf", 11)
    except:
        font = ImageFont.load_default()

frame_draw.text(
    (url_bar_x + 10, url_bar_y + 3),
    "🔒  nutriai.app",
    fill=(255, 255, 255, 140),
    font=font
)

# Paste screenshot into frame
frame.paste(screenshot, (0, browser_bar_height))

# --- Create rounded corners mask for the full frame ---
mask = Image.new("L", (frame_width, frame_height), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle(
    [0, 0, frame_width - 1, frame_height - 1],
    radius=corner_radius,
    fill=255
)

# Apply rounded corners
frame_rounded = Image.new("RGBA", (frame_width, frame_height), (0, 0, 0, 0))
frame_rounded.paste(frame, mask=mask)

# --- Add shadow behind the frame ---
shadow_offset = 15
shadow_spread = 40
shadow_size = (frame_width + shadow_spread * 2, frame_height + shadow_spread * 2)
shadow = Image.new("RGBA", shadow_size, (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow)
shadow_draw.rounded_rectangle(
    [shadow_spread, shadow_spread, 
     shadow_spread + frame_width, shadow_spread + frame_height],
    radius=corner_radius,
    fill=(0, 0, 0, 100)
)
shadow = shadow.filter(ImageFilter.GaussianBlur(radius=25))

# --- Position frame on background ---
frame_x = (OUTPUT_WIDTH - frame_width) // 2
frame_y = (OUTPUT_HEIGHT - frame_height) // 2 + 10

# Paste shadow
shadow_x = frame_x - shadow_spread
shadow_y = frame_y - shadow_spread + shadow_offset
bg_rgba.paste(shadow, (shadow_x, shadow_y), shadow)

# Paste frame
bg_rgba.paste(frame_rounded, (frame_x, frame_y), frame_rounded)

# --- Add subtle reflection/shine on the frame ---
shine = Image.new("RGBA", (frame_width, frame_height // 3), (0, 0, 0, 0))
shine_draw = ImageDraw.Draw(shine)
for y in range(shine.height):
    alpha = int(20 * (1 - y / shine.height))
    shine_draw.line([(0, y), (frame_width, y)], fill=(255, 255, 255, alpha))
bg_rgba.paste(shine, (frame_x, frame_y), shine)

# --- Save final image ---
final = bg_rgba.convert("RGB")
final.save(OUTPUT_PATH, "WEBP", quality=90)
print(f"✅ Mockup guardado en: {OUTPUT_PATH}")
print(f"   Tamaño: {OUTPUT_WIDTH}x{OUTPUT_HEIGHT}")
