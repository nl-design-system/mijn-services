import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@nl-design-system-candidate/link-react';
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
  PreserveData,
  Table,
  TableBody,
  TableCell,
  // TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

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
                Berichten <NumberBadge>2</NumberBadge>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell scope="col"> Onderwerp </TableHeaderCell>
                  <TableHeaderCell scope="col"> Datum </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    🔴 <Link href="#">Betalen van uw parkeerbon</Link>
                  </TableCell>
                  <TableCell>
                    <PreserveData>16-3-2025</PreserveData>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    🔴 <Link href="#"> Tip: Recht op subsidie </Link>
                  </TableCell>
                  <TableCell>
                    <PreserveData>14-1-2025</PreserveData>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#">Informatie geven over uw aanvraag subsidie geluidsisolatie </Link>
                  </TableCell>
                  <TableCell>
                    <PreserveData>13-6-2024</PreserveData>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#">Uw aanvraag Ooievaarspas in behandeling genomen </Link>
                  </TableCell>
                  <TableCell>
                    <PreserveData>12-5-2024</PreserveData>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#">Tip: Betaal bedragen met automatische incasso</Link>
                  </TableCell>
                  <TableCell>
                    <PreserveData>1-5-2024</PreserveData>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
