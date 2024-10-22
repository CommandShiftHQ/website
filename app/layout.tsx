import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import './global.css';

const mabryPro = localFont({
  src: [
    {
      path: '../fonts/MabryProLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/MabryProLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/MabryPro.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MabryProItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/MabryProMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/MabryProMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/MabryProBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/MabryProBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/MabryProBlack.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/MabryProBlackItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-mabry-pro',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={twMerge(mabryPro.variable, inter.variable)} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
