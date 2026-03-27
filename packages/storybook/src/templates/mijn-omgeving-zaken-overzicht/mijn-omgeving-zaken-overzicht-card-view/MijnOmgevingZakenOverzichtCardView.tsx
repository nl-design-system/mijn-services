'use client';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { CaseCard } from '@gemeente-denhaag/card';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Tabs } from '@gemeente-denhaag/tab';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../../themes/index.scss';
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
import { ReactElement, useEffect, useState } from 'react';
import { Layout } from '../../../components/Layout';
import { MijnOmgevingPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

export default function MijnOmgevingZakenOverzichtCardView({
  logo,
  footerLogo,
  paths,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
}) {
  const [tabsKey, setTabsKey] = useState(0);

  /* workaround to force re-render, needs a fix in Den Haag Tabs component */
  useEffect(() => {
    setTabsKey(1);
  }, []);

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
              <Heading level={1}>Mijn Zaken</Heading>
              <Tabs
                key={tabsKey}
                tabData={[
                  {
                    label: 'Open zaken',
                    panelContent: (
                      <div className={'todo-card-layout'}>
                        <CaseCard
                          title={'Aanvraag subsidie geluidsisolatie'}
                          href={paths.zaakDetail}
                          context={'ZK-29124'}
                        />
                        <CaseCard title={'Aanvraag parkeervergunning'} href={paths.zaakDetail} context={'ZK-02599'} />
                      </div>
                    ),
                  },
                  {
                    label: 'Gesloten zaken',
                    panelContent: (
                      <div className={'todo-card-layout'}>
                        <CaseCard
                          title={'Bezwaar tegen WOZ-waarde'}
                          href={paths.zaakDetail}
                          context={'ZK-00122'}
                          appearance="archived"
                        />
                        <CaseCard
                          title={'Aanvraag paspoort'}
                          href={paths.zaakDetail}
                          context={'ZK-99084'}
                          appearance="archived"
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </section>
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
