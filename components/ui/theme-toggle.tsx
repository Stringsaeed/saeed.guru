'use client';
import { Moon, Sun, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative overflow-hidden">
          {/* Sun icon with animation */}
          <motion.div
            initial={{ opacity: theme === 'light' ? 1 : 0, y: theme === 'light' ? 0 : -30 }}
            animate={{ opacity: theme === 'light' ? 1 : 0, y: theme === 'light' ? 0 : -30 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>

          {/* Moon icon with animation */}
          <motion.div
            initial={{ opacity: theme === 'dark' ? 1 : 0, y: theme === 'dark' ? 0 : -30 }}
            animate={{ opacity: theme === 'dark' ? 1 : 0, y: theme === 'dark' ? 0 : -30 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>

          {/* System icon with animation */}
          <motion.div
            initial={{ opacity: theme === 'system' ? 1 : 0, y: theme === 'system' ? 0 : -30 }}
            animate={{ opacity: theme === 'system' ? 1 : 0, y: theme === 'system' ? 0 : -30 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Laptop className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="flex cursor-pointer items-center gap-2"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer items-center gap-2"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="flex cursor-pointer items-center gap-2"
        >
          <Laptop className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
