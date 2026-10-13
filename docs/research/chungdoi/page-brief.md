# Page Brief: Chungdoi Wedding Invitation (Minimalism Dark Red)

**Source URL:** https://chungdoi.com/vi/mau-thiep/minimalism-do-dam/demo  
**Template:** Minimalism Đỏ Đậm (Dark Red Minimalism)  
**Type:** Wedding invitation demo page  
**Language:** Vietnamese

## Initial Observations

### Content
- **Couple Names:** Hoàng Long & Bảo Ngọc
- **Wedding Date:** 3 tháng 1, 2026 (January 3, 2026)
- **Greeting:** "Thân Mời" (Dear Guest)
- **Main CTA:** "Mở thiệp" (Open Invitation)
- **Decorative Element:** ❦ (floral heart ornament)

### Navigation
- "Mẫu Thiệp" (Templates)
- "Thiệp của tôi" (My Invitations)
- "Khách mời" (Guests)

### Color Scheme
**Dark red minimalist theme:**
- Background: Dark reds from `#380a0e` (almost black) through `#a8323b`
- Text: Cream/off-white (`#ece4d8`, `#f3e8de`, `#fff`)
- Accent: Gold `#c9a24a`, Pink `#fb3570`
- Theme meta color: `#fb3570`

### Typography
- **Display Font:** Pattaya (decorative/display font) ✓ Downloaded
- **Body Font:** TBD (awaiting inspection)

### Key Assets
- **Floral decoration:** `flower2-decoration.webp` ✓ Downloaded
- **Photo library images:** 8 potential images from assets.chungdoi.com (awaiting visual confirmation)

### Technical Notes
- Built with Next.js (App Router)
- Uses DaisyUI with "halloween" theme preset
- Theme color: `#fb3570`
- Viewport: Responsive (mobile-first)

## Layout Structure (Initial Analysis)

### Framework Details
- Uses DaisyUI component library (Tailwind CSS)
- Mobile-first responsive design
- Bottom navigation bar for mobile (`lg:hidden`)
- Fixed/absolute positioned decorative elements
- Backdrop blur effects (`backdrop-blur-lg`)

### Component Hierarchy
Based on class analysis:
1. **Mobile Navigation** (bottom fixed bar, hidden on desktop)
   - Three nav items with icons and labels
   - Active state styling with `text-primary`
   
2. **Demo Page Container** (`.demo-page`)
   - Full viewport layout (`fixed inset-0`)
   - Centered content (`flex items-center justify-center`)
   - Overflow handling for decorative elements

3. **Decorative Layer**
   - Absolute positioned floral elements
   - Multiple instances (at least 6 absolute positioned items)
   - Pointer-events-none (decorative only)

### Responsive Behavior
- Mobile: Bottom navigation visible
- Desktop (`lg:`): Bottom nav hidden, likely top/side navigation
- Uses safe areas (`pb-safe`) for mobile notch handling

## Build Strategy
1. ✓ Map routes and file ownership
2. ✓ Extract initial structure from HTML classes
3. ⏳ Build MVP with known content and structure
4. ⏳ Download remaining photo assets as needed
5. ⏳ Refine based on live comparison
6. Final pixel-perfect adjustments
