import type { Metadata } from 'next';

import '@amsterdam/design-system-css/dist/grid/grid.css';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
// import '../../../storybook/src/themes/index.scss';

export const metadata: Metadata = {
  title: 'Mijn omgeving homepage template',
  description: 'Template overzicht voor VNG Mijn Omgeving portaal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
