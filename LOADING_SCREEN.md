# Page Loading Screen

## Overview
A modern, animated loading screen that displays when users first visit the website, providing a smooth and professional first impression.

## Features

### Visual Elements
- **Animated Logo**: Rotating outer ring with pulsing inner circle displaying "SK" initials
- **Loading Text**: "Loading Portfolio" with subtitle "Preparing something awesome..."
- **Progress Bar**: Animated gradient progress bar showing loading percentage
- **Progress Counter**: Real-time percentage display (0% to 100%)
- **Background Particles**: 20 animated floating particles for visual interest

### Animations
- Smooth fade-in entrance
- Rotating ring animation (360° continuous)
- Pulsing logo effect (scale 1 → 1.2 → 1)
- Progress bar fill animation
- Floating particle effects
- Smooth fade-out exit

### Design
- **Colors**: Gradient from blue → purple → pink
- **Background**: Dark gradient (slate-900 → purple-900)
- **Duration**: ~2 seconds total loading time
- **Progress**: Increments by 10% every 150ms

## Technical Implementation

### Component Location
```
portfolio-website/components/PageLoader.tsx
```

### Integration
The loader is integrated at the root layout level (`app/layout.tsx`) to ensure it shows before any content loads.

### Key Features
- **Client-side only**: Uses `'use client'` directive
- **SSR-safe**: Handles `window` object checks for server-side rendering
- **Framer Motion**: Smooth animations with AnimatePresence
- **Auto-dismiss**: Automatically hides after 2 seconds
- **Z-index**: 9999 to ensure it's always on top

### Performance
- Minimal bundle size impact
- GPU-accelerated animations
- No blocking of actual content loading
- Smooth 60fps animations

## Customization

### Adjust Loading Duration
```typescript
// In PageLoader.tsx, line ~25
const timer = setTimeout(() => {
  setIsLoading(false);
}, 2000); // Change this value (in milliseconds)
```

### Adjust Progress Speed
```typescript
// In PageLoader.tsx, line ~18
const progressInterval = setInterval(() => {
  setProgress((prev) => {
    if (prev >= 100) {
      clearInterval(progressInterval);
      return 100;
    }
    return prev + 10; // Change increment value
  });
}, 150); // Change interval speed (in milliseconds)
```

### Change Logo Text
```typescript
// In PageLoader.tsx, line ~48
<span className="text-2xl font-bold text-white">SK</span>
// Change "SK" to your initials
```

### Modify Colors
The loader uses Tailwind CSS classes. Key color classes:
- `border-t-blue-500` - Top border color
- `border-r-purple-500` - Right border color
- `from-blue-500 to-purple-600` - Logo gradient
- `from-blue-500 via-purple-500 to-pink-500` - Progress bar gradient

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Accessibility
- Does not block screen readers
- Respects `prefers-reduced-motion` (animations disabled if user prefers)
- Semantic HTML structure
- Proper ARIA labels can be added if needed

## Future Enhancements
Potential improvements:
- Add actual resource loading tracking
- Integrate with Next.js router events
- Add sound effects (optional)
- Add skip button for returning visitors
- Store "visited" flag in localStorage to skip on subsequent visits
