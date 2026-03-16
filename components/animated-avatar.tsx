'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

const AVATARS = [
  '/static/color.svg',
  '/static/dark.svg',
  '/static/solid.svg',
  '/static/solid-blue.svg',
  '/static/line.svg',
  '/static/line-blue.svg',
];

const INTERVAL = 3000;

export default function AnimatedAvatar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % AVATARS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <div className="relative h-10 w-10">
      {AVATARS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Saeed picture"
          width={40}
          height={40}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
