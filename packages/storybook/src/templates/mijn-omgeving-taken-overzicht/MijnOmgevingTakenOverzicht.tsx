'use client';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { ActionSingle } from '@gemeente-denhaag/action';
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
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { MijnOmgevingPaths } from '../../components/template-navigation/mijnOmgevingPaths';

const labels = {
  today: 'vandaag',
  yesterday: 'gisteren',
  before: 'vóór',
  approachingDeadline: (daysDifference: number) => {
    if (daysDifference === 1) {
      return `nog ${daysDifference} dag`;
    }
    return `nog ${daysDifference} dagen`;
  },
};

export default function MijnOmgevingTakenOverzicht({
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
          <Link href={'/#'} className="todo-breadcrumb--mobile">
            <Icon>
              <IconChevronLeft />
            </Icon>
            Gemeente Voorbeeld
          </Link>

          <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header" className="todo-breadcrumb--desktop">
            <h2 id="hidden-breadcrumb-header" hidden>
              Kruimelpad
            </h2>
            <BreadcrumbNavLink href={'/#'}>Home</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={'/#'}>Gemeente Voorbeeld</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={'/#'} disabled current>
              Mijn taken
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
                <SideNavigationLink href={paths.taken} current>
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
              <Heading level={1}>Mijn taken</Heading>
              <ActionSingle
                className={'todo-action--single'}
                labels={labels}
                link={paths.zaakDetail}
                now="2023-09-28T19:47:36.593Z"
                dateTime="2023-09-30T19:47:36.593Z"
                relativeDate={true}
              >
                <strong>Geef informatie voor uw aanvraag subsidie geluidisolatie</strong>
              </ActionSingle>
              <ActionSingle
                className={'todo-action--single'}
                dateTime="2023-10-02T19:47:36.593Z"
                labels={labels}
                link={paths.zaakDetail}
                now="2023-09-28T19:47:36.593Z"
                relativeDate
              >
                <strong>Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein</strong>
              </ActionSingle>
              <ActionSingle className={'todo-action--single'} link={paths.zaakDetail} labels={labels}>
                <strong>Verleng uw identiteitskaart</strong>
              </ActionSingle>
            </section>
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
