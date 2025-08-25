import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { CaseCard } from '@gemeente-denhaag/card';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChecklist,
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
  Heading1,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Mijn Omgeving/Zaken/Overzicht',
  id: 'mijn-omgeving-zaken-overzicht',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({
  logo,
  theme,
  footerLogo,
}: {
  logo: ReactElement;
  theme: string;
  footerLogo?: ReactElement;
}) => (
  <Layout logo={logo} className={theme} footerLogo={footerLogo}>
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
        Mijn Taken
      </BreadcrumbNavLink>
    </BreadcrumbNav>
    <Grid paddingTop={'x-large'}>
      <Grid.Cell span={4} className={'todo-grid-cell__hide-on-medium'}>
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconLayoutGrid />
                Overzicht
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconChecklist />
                Mijn Taken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconInbox />
                Mijn Berichten
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#" current>
                <IconArchive />
                Mijn Zaken
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconCurrencyEuro />
                Belastingzaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconHome />
                WOZ
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconParking />
                Parkeren
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconBuildingCommunity />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconUser />
                Gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
      </Grid.Cell>
      <Grid.Cell span={8}>
        <section>
          <Heading1>Mijn Zaken</Heading1>
          <div className={'todo-card-layout'}>
            <CaseCard title={'Aanvraag subsidie geluidsisolatie'} href={'#'} date={'2020-10-18T07:34'} />
            <CaseCard title={'Aanvraag parkeervergunning'} href={'#'} date={'2020-11-05T07:34'} />
            <CaseCard title={'Bezwaar tegen WOZ-waarde'} href={'#'} date={'2020-09-05T07:34'} active={false} />
            <CaseCard title={'Aanvraag paspoort'} href={'#'} date={'2020-08-05T07:34'} active={false} />
          </div>
        </section>
      </Grid.Cell>
    </Grid>
  </Layout>
);

export const Default: Story = {
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
