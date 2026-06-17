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
import { UtrechtPagination } from '@utrecht/web-component-library-react';
import { ReactElement } from 'react';
import { zakenApiResponse } from '../../../api/zaken/fixtures';
import { getZakenCount, mapZakenToOverviewItems, PaginatedZaakList } from '../../../api/zaken/view-model';
import { Layout } from '../../../components/Layout';
import { MijnOmgevingPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

export default function MijnOmgevingZakenOverzichtTableView({
  logo,
  footerLogo,
  paths,
  zaken = zakenApiResponse,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
  zaken?: PaginatedZaakList;
}) {
  const zaakItems = mapZakenToOverviewItems(zaken, paths.zaakDetail);
  const zaakCount = getZakenCount(zaken);
  const paginationLinks = [
    { href: '#page1', index: 1, current: true },
    ...(zaakCount > zaakItems.length ? [{ href: '#page2', index: 2 }] : []),
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
            <BreadcrumbNavLink href={paths.zakenOverzicht} disabled current>
              Zaken
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
                  Taken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.berichtenOverzicht}>
                  <IconInbox />
                  Berichten <NumberBadge>2</NumberBadge>
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.zakenOverzicht} current>
                  <IconArchive />
                  Zaken
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
                  Gegevens
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
          </SideNavigationBase>
        </Grid.Cell>

        <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
          <main id="main">
            <section>
              <Heading level={1} id="mijn-zaken-overzicht-heading">
                Zaken
              </Heading>

              <div className="todo-search-bar">
                <div className="todo-search-bar__form" role="search">
                  <label htmlFor="zaken-zoeken" className="todo-visually-hidden">
                    Zoeken in mijn zaken
                  </label>
                  <Textbox className="todo-search-bar__textbox" id="zaken-zoeken" placeholder="Zoeken..."></Textbox>
                  <Button className="todo-button todo-search-bar__button" type="submit" purpose="secondary">
                    Zoeken
                  </Button>
                </div>
                <Button iconStart={<IconCalendarEvent />} className="todo-button" purpose="subtle">
                  Filter
                </Button>
              </div>

              <Paragraph>
                {zaakCount} {zaakCount === 1 ? 'zaak' : 'zaken'}
              </Paragraph>
              <Table aria-labelledby="mijn-zaken-overzicht-heading">
                <TableHeader>
                  <TableHeaderCell scope="col">Naam</TableHeaderCell>
                  <TableHeaderCell scope="col">Datum aanvraag</TableHeaderCell>
                  <TableHeaderCell scope="col">Open of gesloten</TableHeaderCell>
                </TableHeader>

                <TableBody>
                  {zaakItems.map((zaakItem) => (
                    <TableRow key={zaakItem.id}>
                      <TableCell>
                        <Link className="todo-link" href={zaakItem.href}>
                          {zaakItem.title}
                        </Link>
                      </TableCell>
                      <TableCell>{zaakItem.requestDate}</TableCell>
                      <TableCell>{zaakItem.statusLabel}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <UtrechtPagination
                currentIndex={1}
                links={JSON.stringify(paginationLinks)}
                next={JSON.stringify(paginationLinks[1])}
              ></UtrechtPagination>
            </section>
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
