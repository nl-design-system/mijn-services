import '@amsterdam/design-system-css/dist/grid/grid.css';
import '@amsterdam/design-system-css/dist/page-footer/page-footer.css';
import { Grid, PageFooter } from '@amsterdam/design-system-react';
import {
  Heading,
  Link,
  LinkList,
  LinkListLink,
  PageContent,
  PageHeader,
} from '@utrecht/component-library-react/dist/css-module';
import { Root } from '@utrecht/root-react/dist/css';
import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import './layout.css';

interface LayoutProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  logo?: ReactElement;
  footerLogo?: ReactElement;
}

export const Layout = ({ logo, children, className, footerLogo, ...props }: LayoutProps) => {
  return (
    <Root className={className} {...props}>
      <PageHeader className="voorbeeld-page-header">
        <div className="todo-page-header__content">{logo}</div>
      </PageHeader>
      <PageContent className="todo-page-content">
        <main className={'utrecht-page-content__main'}>{children}</main>
      </PageContent>

      <PageFooter>
        <PageFooter.Spotlight className="todo-page-footer__spotlight">
          <Grid className="todo-page-footer__grid">
            {footerLogo && (
              <Grid.Cell span={3}>
                <div>{footerLogo}</div>
              </Grid.Cell>
            )}

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="utrecht-heading-4">
                Contact
              </Heading>
              <address className="todo-address utrecht-paragraph">
                Bel <Link href="tel:453453">453 453</Link> (maandag tot en met vrijdag van 09.00 tot 17.00 uur) of stuur
                een e-mail naar{' '}
                <Link href="mailto:vragen@gemeentevoorbeeld.nl">
                  <span className="utrecht-url-data">vragen@gemeentevoorbeeld.nl</span>
                </Link>
                {'.'}
              </address>
            </Grid.Cell>

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="utrecht-heading-4">
                Meer weten
              </Heading>
              <LinkList>
                <LinkListLink href="/">Over gemeente Voorbeeld</LinkListLink>
                <LinkListLink href="/">Nieuwsbrief</LinkListLink>
                <LinkListLink href="/">Social Media</LinkListLink>
                <LinkListLink href="/">Werken bij gemeente Voorbeeld</LinkListLink>
              </LinkList>
            </Grid.Cell>

            <Grid.Cell span={footerLogo ? 3 : 4}>
              <Heading level={2} appearance="utrecht-heading-4">
                Over deze site
              </Heading>
              <LinkList>
                <LinkListLink href="/">Gebruikersvoorwaarden</LinkListLink>
                <LinkListLink href="/">Proclaimer</LinkListLink>
                <LinkListLink href="/">Cookieverklaring</LinkListLink>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
      </PageFooter>
    </Root>
  );
};
