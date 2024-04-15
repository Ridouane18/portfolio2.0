'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function Providers({ children }: Props) {
  return <ThemeProvider defaultTheme='dark' attribute="class">{children}</ThemeProvider>;
}