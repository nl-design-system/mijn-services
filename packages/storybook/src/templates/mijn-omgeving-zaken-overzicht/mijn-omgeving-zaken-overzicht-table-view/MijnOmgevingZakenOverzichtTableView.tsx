'use client';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Button } from '@nl-design-system-candidate/button-react/css';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../../themes/index.scss';
import {
  IconArchive,
  IconBuildingCommunity,
  IconCalendarEvent,
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
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../../components/Layout';
import { MijnOmgevingPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

export default function MijnOmgevingZakenOverzichtTableView({
  logo,
  footerLogo,
  paths,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
}) {
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
            <BreadcrumbNavLink href={paths.zakenOverzicht} disabled current>
              Mijn zaken
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
                <SideNavigationLink href={paths.berichtenOverzicht}>
                  <IconInbox />
                  Mijn berichten <NumberBadge>2</NumberBadge>
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.zakenOverzicht} current>
                  <IconArchive />
                  Mijn zaken
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={'/#'}>
                  <IconCurrencyEuro />
                  Belastingzaken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={'/#'}>
                  <IconHome />
                  WOZ
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={'/#'}>
                  <IconParking />
                  Parkeren
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={'/#'}>
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
              <Heading level={1} id="mijn-zaken-overzicht-heading">
                Mijn Zaken
              </Heading>
              <Textbox></Textbox>
              <Button>Zoeken</Button>
              <Button>
                <Icon>
                  <IconCalendarEvent />
                </Icon>
                Filter
              </Button>
              <Paragraph>89 zaken</Paragraph>
              <Table aria-labelledby="mijn-zaken-overzicht-heading">
                <TableHeader>
                  <TableHeaderCell scope="col">Naam</TableHeaderCell>
                  <TableHeaderCell scope="col">Datum aanvraag</TableHeaderCell>
                  <TableHeaderCell scope="col">Open of gesloten</TableHeaderCell>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Aanvraag laadpaal
                      </Link>
                    </TableCell>
                    <TableCell>16-03-2025</TableCell>
                    <TableCell>Open</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Aanvraag subsidie geluidsisolatie
                      </Link>
                    </TableCell>
                    <TableCell>14-01-2025</TableCell>
                    <TableCell>Open</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Aanvraag parkeervergunning
                      </Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Open</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Nog een zaak
                      </Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Nog een zaak
                      </Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link href={paths.zaakDetail}>Nog een zaak</Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Nog een zaak
                      </Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link href={paths.zaakDetail}>Nog een zaak</Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Link className="todo-link" href={paths.zaakDetail}>
                        Nog een zaak
                      </Link>
                    </TableCell>
                    <TableCell>13-06-2024</TableCell>
                    <TableCell>Gesloten</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
