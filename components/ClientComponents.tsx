// components/ClientComponents.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import client-side components
export const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
export const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
export const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
export const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
export const FloatingNav = dynamic(() => import('@/components/ui/FloatingNav'), { ssr: false });
export const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
export const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
