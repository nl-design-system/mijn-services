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
import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../themes/index.scss';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronRight,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconLayoutGrid,
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
import '@utrecht/web-component-library-stencil';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const messages = [
  {
    new: true,
    title: '🔴 Betalen van uw parkeerbon',
    dateTime: '2023-03-16T06:41:34.427Z',
    link: '#example',
  },
  {
    new: true,
    title: '🔴 Tip: Recht op subsidie',
    dateTime: '2023-01-14T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Informatie geven over uw aanvraag subsidie geluidsisolatie',
    dateTime: '2024-06-13T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Uw aanvraag Ooievaarspas in behandeling genomen',
    dateTime: '2024-05-12T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Informatie geven voor uw aanvraag subsidie geluidsisolatie',
    dateTime: '2024-06-15T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Tip: Betaal bedragen met automatische incasso',
    dateTime: '2024-05-01T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Herinnering: Betaling van uw bewoners parkeervergunning',
    dateTime: '2024-04-03T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Uw paspoort is actief',
    dateTime: '2024-03-28T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Werkzaamheden gepland in uw buurt',
    dateTime: '2023-07-06T19:47:36.593Z',
    link: '#example',
  },
];

const meta = {
  title: 'Templates/Mijn Omgeving/Berichten/Overzicht',
  id: 'mijn-omgeving-berichten-overzicht',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ logo, footerLogo }: { logo: ReactElement; footerLogo?: ReactElement }) => (
  <Layout logo={logo} footerLogo={footerLogo}>
    <Grid paddingTop={'x-large'}>
      <Grid.Cell span={{ narrow: 3, medium: 6, wide: 12 }}>
        <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header">
          <h2 id="hidden-breadcrumb-header" hidden>
            Kruimelpad
          </h2>
          <BreadcrumbNavLink href={'/#'}>Home</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'}>Mijn Voorbeeld</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'} disabled current>
            Mijn Berichten
          </BreadcrumbNavLink>
        </BreadcrumbNav>
      </Grid.Cell>

      <Grid.Cell span={3} className={'todo-grid-cell--hide-on-medium'}>
        <SideNavigationBase>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href="/#" current>
                <IconLayoutGrid />
                Overzicht
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
                <IconInbox />
                Berichten
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
                <IconArchive />
                Lopende zaken
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
              <SideNavigationLink href="/#">
                <IconUser />
                Gegevens
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
        </SideNavigationBase>
      </Grid.Cell>

      <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
        <main id="main">
          <section>
            <Heading level={1}>Mijn Berichten</Heading>

            {messages.map((m) => (
              <Action key={m.title} link={m.link} dateTime={m.dateTime}>
                {m.new ? (
                  <>
                    <b>{m.title}</b>
                  </>
                ) : (
                  m.title
                )}
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

export const Default: Story = {
  parameters: {
    theme: 'voorbeeld-theme',
  },
  render: () => <TemplatePage logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />,
};

export const DenHaagTheme: Story = {
  parameters: {
    theme: 'denhaag-theme',
  },
  render: () => <TemplatePage logo={<DenHaagLogo />} />,
};
