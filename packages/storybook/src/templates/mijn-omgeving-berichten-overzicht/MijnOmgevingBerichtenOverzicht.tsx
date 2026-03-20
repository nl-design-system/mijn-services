'use client';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { Action } from '@gemeente-denhaag/action';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../themes/index.scss';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronLeft,
  IconChevronRight,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconLayoutGrid,
  IconListCheck,
  IconParking,
  IconUser,
} from '@tabler/icons-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtPagination } from '@utrecht/web-component-library-react';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { MijnOmgevingPaths } from '../../components/template-navigation/mijnOmgevingPaths';

export default function MijnOmgevingBerichtenOverzicht({
  logo,
  footerLogo,
  paths,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
}) {
  const messages = [
    {
      new: true,
      title: '🔴 Betalen van uw parkeerbon',
      dateTime: '2023-03-16T06:41:34.427Z',
      link: paths.berichtDetail,
    },
    {
      new: true,
      title: '🔴 Tip: Recht op subsidie',
      dateTime: '2023-01-14T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Informatie geven over uw aanvraag subsidie geluidsisolatie',
      dateTime: '2024-06-13T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Uw aanvraag Ooievaarspas in behandeling genomen',
      dateTime: '2024-05-12T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Informatie geven voor uw aanvraag subsidie geluidsisolatie',
      dateTime: '2024-06-15T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Tip: Betaal bedragen met automatische incasso',
      dateTime: '2024-05-01T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Herinnering: Betaling van uw bewoners parkeervergunning',
      dateTime: '2024-04-03T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Uw paspoort is actief',
      dateTime: '2024-03-28T19:47:36.593Z',
      link: paths.berichtDetail,
    },
    {
      title: 'Werkzaamheden gepland in uw buurt',
      dateTime: '2023-07-06T19:47:36.593Z',
      link: paths.berichtDetail,
    },
  ];
  return (
    <Layout logo={logo} footerLogo={footerLogo}>
      <Grid paddingTop={'x-large'}>
        <Grid.Cell span={{ narrow: 3, medium: 6, wide: 12 }}>
          <Link href={paths.overzicht} className="todo-breadcrumb--mobile">
            <Icon>
              <IconChevronLeft />
            </Icon>
            Gemeente Voorbeeld
          </Link>

          <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header" className="todo-breadcrumb--desktop">
            <h2 id="hidden-breadcrumb-header" hidden>
              Kruimelpad
            </h2>
            <BreadcrumbNavLink href={paths.overzicht}>Home</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={paths.overzicht}>Gemeente Voorbeeld</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={paths.berichtenOverzicht} disabled current>
              Mijn berichten
            </BreadcrumbNavLink>
          </BreadcrumbNav>
        </Grid.Cell>

        <Grid.Cell span={3} className={'todo-grid-cell--hide-on-medium'}>
          <SideNavigationBase>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.overzicht}>
                  <IconLayoutGrid />
                  Overzicht
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.taken}>
                  <IconListCheck />
                  Mijn taken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.berichtenOverzicht} current>
                  <IconInbox />
                  Mijn berichten <NumberBadge>2</NumberBadge>
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.zakenOverzicht}>
                  <IconArchive />
                  Mijn zaken
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconCurrencyEuro />
                  Belastingzaken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconHome />
                  WOZ
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconParking />
                  Parkeren
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconBuildingCommunity />
                  Erfpacht
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.mijnGegevens}>
                  <IconUser />
                  Mijn gegevens
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
          </SideNavigationBase>
        </Grid.Cell>

        <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
          <main id="main">
            <section>
              <Heading level={1}>Mijn berichten</Heading>

              {messages.map((m) => (
                <Action key={m.title} link={m.link} dateTime={m.dateTime}>
                  {m.new ? <b>{m.title}</b> : m.title}
                </Action>
              ))}

              <UtrechtPagination
                currentIndex={3}
                links={JSON.stringify([
                  { href: '#page1', index: 1 },
                  { href: '#page2', index: 2 },
                  { href: '#page3', index: 3, current: true },
                  { href: '#page4', index: 4 },
                ])}
                prev={JSON.stringify({ href: '#page2', index: 2 })}
                next={JSON.stringify({ href: '#page4', index: 4 })}
              ></UtrechtPagination>
            </section>
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
