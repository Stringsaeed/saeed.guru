'use client';

import { ComponentProps } from 'react';

export default function DisableMenu({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div onContextMenu={(e) => e.preventDefault()} {...props}>
      {children}
    </div>
  );
}
