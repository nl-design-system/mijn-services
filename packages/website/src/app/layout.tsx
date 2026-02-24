import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import '@utrecht/body-css';
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
    <html lang="nl" dir="ltr" className="utrecht-root voorbeeld-theme">
      <body className="utrecht-body">{children}</body>
    </html>
  );
}
