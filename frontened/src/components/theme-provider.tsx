'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ExtendedThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
