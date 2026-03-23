'use client';

import { lazy, Suspense, ComponentType } from 'react';

interface LazySectionProps {
  component: ComponentType;
  fallback?: React.ReactNode;
}

export function LazySection({ component: Component, fallback }: LazySectionProps) {
  return (
    <Suspense fallback={fallback || <div className="h-96" />}>
      <Component />
    </Suspense>
  );
}

export function createLazySection(Component: ComponentType) {
  return lazy(() => Promise.resolve({ default: Component }));
}
