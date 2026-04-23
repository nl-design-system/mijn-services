import { Root } from '@utrecht/root-react';
import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import '@utrecht/root-css';

export const metadata: Metadata = {
  title: 'Mijn omgeving homepage template',
  description: 'Template overzicht voor VNG Mijn Omgeving portaal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Root lang="nl" dir="ltr" className="voorbeeld-theme">
      <body>{children}</body>
    </Root>
  );
}
