# Chungdoi.com Wedding Invitation Page Analysis

**URL:** https://chungdoi.com/vi/mau-thiep/minimalism-do-dam/demo

## Screenshots Captured
- Desktop (1920px): `desktop-1920.png` - 613KB
- Mobile (375px): `mobile-375.png` - 110KB

---

## Color Palette

### Primary Colors
- **Deep Red/Burgundy**: `rgb(81, 20, 25)` / `#511419` - Primary brand color, used for headings and key elements
- **Cream/Beige**: `rgb(236, 228, 216)` / `#ECE4D8` - Secondary color for text on dark backgrounds and buttons
- **Light Beige**: `rgb(222, 217, 215)` / `#DED9D7` - Button text variant

### Background Colors
- **Page Background**: Transparent / `rgba(0, 0, 0, 0)`
- **Button Backgrounds**: 
  - Primary: `rgb(236, 228, 216)` - Cream
  - Secondary: `rgb(81, 20, 25)` - Deep red
  - Tertiary: `rgba(81, 20, 25, 0.1)` - Light red tint
  - Accent: `rgba(81, 20, 25, 0.082)` - Very light red

### Accent Colors
- **Semi-transparent cream**: `oklab(0.86445 0.00191059 0.000591316 / 0.6)`
- **Body text**: `oklch(0.16961 0.001 17.32)` - Very dark gray

---

## Typography

### Font Families

**Heading 1 (H1)**
- Font: `"Viaoda Libre", "EB Garamond", serif`
- Size: `36px`
- Weight: `400` (Regular)
- Line Height: `45px`
- Color: `rgb(81, 20, 25)` - Deep red
- Margin: `0px 0px 8px 0px`

**Heading 2 (H2)**
- Font: `"Times New Roman", serif`
- Size: `16px`
- Weight: `700` (Bold)
- Line Height: `24px`
- Color: `rgb(236, 228, 216)` - Cream
- Margin: `0px`

**Heading 3 (H3)**
- Font: `"Viaoda Libre", "The Nautigal", cursive`
- Size: `43px`
- Weight: `400` (Regular)
- Line Height: `60px`
- Color: `rgb(236, 228, 216)` - Cream
- Margin: `0px`

**Body Text**
- Font: System UI stack (`ui-sans-serif, system-ui, sans-serif`)
- Size: `16px`
- Weight: `300` (Light)
- Line Height: `24px`
- Color: `oklch(0.16961 0.001 17.32)` - Very dark

---

## Layout Measurements

### Container
- **Max Width**: `448px` (mobile-first design)
- **Padding**: `0px`
- **Margin**: `0px auto` (centered)

### Section Spacing
1. **Section 0**: Padding `0px`, Margin `0px auto`
2. **Section 1**: Padding `0px`, Margin `0px auto 16px`
3. **Section 2**: Padding `32px 24px`, Margin `0px`
4. **Section 3**: Padding `0px`, Margin `16px auto`
5. **Section 4**: Padding `120px 24px 32px`, Margin `0px`

---

## Button Styles

### Primary CTA Button (XÁC NHẬN THAM DỰ - Confirm Attendance)
- Padding: `8px 24px`
- Border Radius: `3.35544e+07px` (fully rounded pill shape)
- Background: `rgb(236, 228, 216)` - Cream
- Text Color: `rgb(81, 20, 25)` - Deep red
- Font Size: `14px`
- Font Weight: `300` (Light)

### Secondary Button (GỬI LỜI CHÚC - Send Wishes)
- Padding: `8px 24px`
- Border Radius: `3.35544e+07px` (fully rounded pill shape)
- Background: `rgb(81, 20, 25)` - Deep red
- Text Color: `rgb(222, 217, 215)` - Light beige
- Font Size: `14px`
- Font Weight: `600` (Semi-bold)

### Small Action Buttons (Lưu QR - Save QR)
- Padding: `4px 8px`
- Border Radius: `3.35544e+07px` (fully rounded)
- Background: `rgba(81, 20, 25, 0.082)` - Very light red tint
- Text Color: `rgb(81, 20, 25)` - Deep red
- Font Size: `10px`
- Font Weight: `500` (Medium)

### Icon Button (Magic Wand 🪄)
- Padding: `8px`
- Border Radius: `8px`
- Background: `rgba(81, 20, 25, 0.1)` - Light red tint
- Text Color: `rgb(81, 20, 25)` - Deep red

---

## Images & Assets

### Theme Assets (from chungdoi.com CDN)
1. **castle-background.webp** - 1310×1009px - Background castle illustration
2. **envelope-background.webp** - 1013×1168px - Envelope background
3. **envelope-cover.webp** - 1013×668px - Envelope front cover
4. **flower2-decoration.webp** - 811×1938px - Floral decoration (used multiple times)
5. **paper.webp** - 1333×2000px - Paper texture background
6. **camera.webp** - 981×1041px - Camera icon illustration
7. **cake.webp** - 790×1134px - Wedding cake illustration
8. **cook.webp** - 957×1117px - Cooking/food illustration
9. **papernote-background.webp** - 1513×1378px - Paper note texture

### Wedding Photos (from assets.chungdoi.com)
7 wedding photos, all in vertical format:
- Photo 1-7: Various sizes around 1366×2048px (portrait orientation)
- Format: `.webp`
- All have `loading="auto"`

### QR Codes
- Two QR codes for payment/contact information
- Size: 1024×1024px
- Generated dynamically via `/api/qr-png`

### SVG Icons
25 SVG icons used throughout:
- View boxes: `0 0 24 24`, `0 0 24 22`
- Icons include: grid, envelope, chat, arrows, hearts, navigation, close buttons
- Most use `stroke` with varying widths (1.5-2.5)
- Heart icons use `fill="currentColor"`

---

## Animations & Interactive Elements

### Floating Animations
**drFloat** - Element floating effect:
- Multiple elements with variations:
  - 6.5s duration with 0.4s delay
  - 5s, 5.5s, 6s durations with various delays
  - All use `ease-in-out` timing and `infinite` repeat

### Envelope Animations
**ienvSparkleAnim** - Sparkle effect on envelope:
- 2s duration with staggered delays (0s, 0.6s, 1.2s, 1.7s)
- `ease-in-out` timing

**ienvShadowPulse** - Shadow pulsing:
- 3s duration, `ease-in-out infinite`

**ienvFloat** - Envelope floating:
- 5.2s duration with 0.5s delay

**ienvFloatMain** - Main float animation:
- 3s duration

**ienvHintPulse** - Hint text pulsing:
- 2s duration, `ease-in-out infinite`

### Falling Effect
**ambient-fall** - Hearts/petals falling:
- 12 different instances with randomized timings (18-26 seconds)
- Each with different negative delays for staggered effect
- `ease-in-out` timing

### Other Animations
**seal-pulse** - Seal pulsing effect:
- 2s duration, `ease-in-out infinite`

**shine** - Shine/shimmer effect:
- 3s duration, `ease-in-out infinite`

**ping** - Notification ping animation:
- 1s duration, `cubic-bezier(0, 0, 0.2, 1)` timing

---

## Interactive Elements & Transitions

### Transitions
- Most elements have `transition: all` applied
- Smooth hover states on buttons
- Fade effects on various UI elements

### Scroll-Triggered Effects
- No fixed/sticky positioning detected in main content
- Page flows naturally with scroll

### Modal/Overlay Elements
- Photo gallery with navigation (‹ › arrows)
- Close buttons (✕) for modal views
- Image lightbox functionality

---

## Key Design Patterns

1. **Vertical Mobile-First Layout**: Max-width of 448px indicates strong mobile focus
2. **Elegant Traditional Style**: Serif fonts (Viaoda Libre, Times New Roman) for formal wedding aesthetic
3. **Rich Animations**: Extensive use of floating, pulsing, and falling animations for luxurious feel
4. **Deep Red & Cream Palette**: Traditional wedding colors with sophisticated execution
5. **Pill-Shaped Buttons**: Fully rounded borders (border-radius: 9999px equivalent)
6. **WebP Image Format**: Modern optimization for all images
7. **Decorative Elements**: Flowers, paper textures, castle backgrounds for romantic atmosphere
8. **Interactive Envelope**: Opening animation with sparkles and floating effects

---

## Technical Notes

- Uses oklch/oklab color spaces for modern color management
- Extensive use of absolute positioning for layered design
- Multiple background layers creating depth
- CSS animations defined with keyframes
- Responsive images with proper width/height attributes
- Lazy loading for some images (envelope previews)

---

## Files Generated
1. `desktop-1920.png` - Full desktop screenshot
2. `mobile-375.png` - Full mobile screenshot  
3. `measurements.json` - Complete computed styles data
4. `page.html` - Full HTML source
5. `ANALYSIS.md` - This analysis document
