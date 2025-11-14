import '@amsterdam/design-system-css/dist/grid/grid.css';
import '@amsterdam/design-system-css/dist/page-footer/page-footer.css';
import { Grid, PageFooter } from '@amsterdam/design-system-react';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';
import { LinkList, LinkListLink, PageContent, PageHeader } from '@utrecht/component-library-react/dist/css-module';
import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import './layout.css';

interface LayoutProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  logo?: ReactElement;
  footerLogo?: ReactElement;
}

export const Layout = ({ logo, children, className, footerLogo, ...props }: LayoutProps) => {
  return (
    <div className={className} {...props}>
      <PageHeader className="todo-page-header">
        <SkipLink className="todo-skip-link" href="#main">
          Direct naar de hoofdinhoud
        </SkipLink>
        <Grid className="todo-page-header-content">{logo}</Grid>
      </PageHeader>
      <PageContent className="todo-page-content">{children}</PageContent>
      <PageFooter style={{ marginBlockStart: '24px' }}>
        <PageFooter.Spotlight className="todo-page-footer__spotlight">
          <Grid className="todo-page-footer__grid">
            {footerLogo && (
              <Grid.Cell span={3}>
                <div>{footerLogo}</div>
              </Grid.Cell>
            )}

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="level-4">
                Contact
              </Heading>
              <address className="todo-address">
                Bel{' '}
                <Link className="todo-link--footer" href="tel:453453">
                  453 453
                </Link>{' '}
                (maandag tot en met vrijdag van 09.00 tot 17.00 uur) of stuur een e-mail naar{' '}
                <Link className="todo-link--footer" href="mailto:vragen@gemeentevoorbeeld.nl">
                  <span className="utrecht-url-data">vragen@gemeentevoorbeeld.nl</span>
                </Link>
                {'.'}
              </address>
            </Grid.Cell>

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="level-4">
                Meer weten
              </Heading>
              <LinkList className="todo-link-list--footer">
                <LinkListLink href="/">Over gemeente Voorbeeld</LinkListLink>
                <LinkListLink href="/">Nieuwsbrief</LinkListLink>
                <LinkListLink href="/">Social Media</LinkListLink>
                <LinkListLink href="/">Werken bij gemeente Voorbeeld</LinkListLink>
              </LinkList>
            </Grid.Cell>

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="level-4">
                Over deze site
              </Heading>
              <LinkList className="todo-link-list--footer">
                <LinkListLink href="/">Gebruikersvoorwaarden</LinkListLink>
                <LinkListLink href="/">Proclaimer</LinkListLink>
                <LinkListLink href="/">Cookieverklaring</LinkListLink>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
      </PageFooter>
    </div>
  );
};
