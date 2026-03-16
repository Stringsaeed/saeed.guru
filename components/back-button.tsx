'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Button size="icon" variant="ghost" onClick={() => router.back()}>
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="sr-only">Back</span>
    </Button>
  );
}
