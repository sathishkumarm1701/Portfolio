# 3D Features & Interactive Elements

Your portfolio now includes advanced 3D elements and interactive features!

## What's New

### 1. 3D Hero Section
- **Location**: Hero section (top of page)
- **Features**:
  - Animated 3D cube with rotating geometry
  - Floating TV mockup with glowing screen
  - Auto-rotating camera with orbit controls
  - Smooth floating animations
  - Responsive to screen size

### 2. Device Showcase Section
- **Location**: Between Experience and Projects sections
- **Features**:
  - 3D Fire TV mockup
  - 3D Mobile phone mockup
  - Interactive 3D scene with auto-rotation
  - Platform-specific information cards
  - Hover animations

### 3. Interactive Project Cards
- **Location**: Projects section
- **Features**:
  - Video preview thumbnails
  - Play button overlay
  - Full-screen video modal
  - Smooth animations
  - Responsive design

## Technologies Used

### 3D Rendering
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber

### Video Playback
- **React Player** - Universal video player component

## File Structure

```
components/
├── 3d/
│   ├── Scene.tsx              # Main 3D scene for hero
│   ├── FloatingBox.tsx        # Animated 3D cube
│   ├── FloatingTV.tsx         # 3D TV mockup
│   └── FloatingMobile.tsx     # 3D mobile mockup
├── DeviceShowcase.tsx         # Device showcase 3D scene
├── ProjectCard.tsx            # Interactive project card with video
└── sections/
    ├── Hero.tsx               # Updated with 3D scene
    ├── DeviceShowcaseSection.tsx  # New device showcase section
    └── Projects.tsx           # Updated with video support
```

## Customization

### Change 3D Colors

Edit `components/3d/FloatingBox.tsx`:
```tsx
<meshPhongMaterial
  color="#3b82f6"        // Change this color
  emissive="#1e40af"     // Change glow color
  shininess={100}
/>
```

### Adjust Animation Speed

Edit `components/3d/Scene.tsx`:
```tsx
<OrbitControls 
  autoRotate
  autoRotateSpeed={2}    // Increase for faster rotation
/>
```

### Add Project Videos

Edit `components/sections/Projects.tsx`:
```tsx
{
  title: 'Your Project',
  videoUrl: 'https://youtube.com/watch?v=VIDEO_ID',  // Add YouTube URL
  // ... other properties
}
```

## Performance Tips

1. **Lazy Loading**: 3D scenes are dynamically imported with `dynamic()`
2. **Fallback UI**: Shows placeholder while 3D loads
3. **Responsive**: Automatically scales to screen size
4. **Optimized**: Uses `dpr={[1, 2]}` for device pixel ratio

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 15+)
- Mobile: Optimized for touch devices

## Troubleshooting

### 3D Scene Not Showing

1. Check browser console for errors
2. Ensure WebGL is enabled
3. Try a different browser
4. Clear browser cache

### Video Not Playing

1. Verify YouTube URL is correct
2. Check if video is public
3. Ensure CORS is enabled
4. Try a different video source

### Performance Issues

1. Reduce `autoRotateSpeed` in Scene.tsx
2. Disable auto-rotation on mobile
3. Use lower resolution videos
4. Reduce particle count in ParticleBackground.tsx

## Adding More 3D Objects

### Create a New 3D Component

```tsx
// components/3d/MyObject.tsx
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const MyObject = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color="#3b82f6" />
    </mesh>
  );
};

export default MyObject;
```

### Use in Scene

```tsx
import MyObject from './MyObject';

<Suspense fallback={null}>
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <MyObject position={[0, 0, 0]} />
  </Float>
</Suspense>
```

## Video Sources

You can use videos from:
- YouTube (public videos)
- Vimeo
- Direct video URLs (MP4, WebM)
- Custom video hosting

Example:
```tsx
videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
// or
videoUrl: 'https://example.com/video.mp4'
```

## Next Steps

1. **Add Your Videos**: Replace placeholder YouTube URLs with your project videos
2. **Customize Colors**: Update 3D material colors to match your brand
3. **Adjust Animations**: Fine-tune rotation speeds and float intensities
4. **Test Performance**: Check on different devices and browsers

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Components](https://github.com/pmndrs/drei)
- [React Player](https://github.com/cookpete/react-player)

## Support

For issues with 3D rendering or video playback:
1. Check browser console for errors
2. Verify WebGL support
3. Test in different browser
4. Check video URL accessibility

---

**Your portfolio now has professional 3D elements and interactive features!** 🚀
