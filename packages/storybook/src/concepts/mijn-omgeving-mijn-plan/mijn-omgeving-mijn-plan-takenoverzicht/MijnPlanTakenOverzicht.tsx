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
import { Tabs } from '@gemeente-denhaag/tab';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../../themes/index.scss';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronLeft,
  IconChevronRight,
  IconClipboard,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconInfoCircle,
  IconLayoutGrid,
  IconListCheck,
  IconParking,
  IconUser,
} from '@tabler/icons-react';
import {
  Alert,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement, useEffect, useState } from 'react';
import { Layout } from '../../../components/Layout';
import { MijnOmgevingPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

// TODO: placeholder only — replace once the Taken data model/API is defined.
// Shape is a guess based on how Taken could be rendered.
// "now" below is the fixed reference point ("today") for this fixture's date math.
const now = '2026-07-07T00:00:00.000Z';

const takenFixture = [
  {
    id: '1',
    title: 'Individuele inkomstentoeslag aanvragen',
    dateTime: '2026-10-10T00:00:00.000Z', // future date
    completed: false,
  },
  {
    id: '2',
    title: 'Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein',
    dateTime: '2026-07-09T00:00:00.000Z', // 2 days after "now" → falls in the "nog X dagen" window
    completed: false,
  },
  {
    id: '3',
    title: 'Verleng uw identiteitskaart',
    completed: true,
    dateTime: '2026-12-31T00:00:00.000Z', // completed, but dated in the future relative to "now"
  },
  {
    id: '4',
    title: 'Nog een afgeronde taak',
    completed: true,
    dateTime: '2026-02-04T00:00:00.000Z', // completed, dated in the past relative to "now"
  },
];

const labels = {
  today: 'vandaag',
  yesterday: 'gisteren',
  before: 'vóór',
  approachingDeadline: (daysDifference: number) =>
    daysDifference === 1 ? `nog ${daysDifference} dag` : `nog ${daysDifference} dagen`,
};

const formatCompletedDate = (dateTime: string) =>
  new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateTime));

export default function MijnPlanTakenOverzicht({
  logo,
  footerLogo,
  paths,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
}) {
  const [tabsKey, setTabsKey] = useState(0);
  const openTaken = takenFixture.filter((taak) => !taak.completed);
  const afgerondeTaken = takenFixture.filter((taak) => taak.completed);

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
            Home
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
            <BreadcrumbNavLink href={paths.mijnPlanTakenOverzicht} disabled current>
              Taken
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
                <SideNavigationLink href={paths.mijnPlanTakenOverzicht} current>
                  <IconListCheck />
                  Taken <NumberBadge>{openTaken.length}</NumberBadge>
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.berichtenOverzicht}>
                  <IconInbox />
                  Berichten
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.mijnPlanOverzichtOntwikkelplan}>
                  <IconClipboard />
                  Plannen
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.zakenOverzicht}>
                  <IconArchive />
                  Zaken
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
            <Alert type="warning" icon={<IconInfoCircle className="utrecht-icon" />}>
              <Heading level={1} appearance="level-3">
                Concept
              </Heading>
              <Paragraph>
                MijnPlan template is nog in ontwikkeling. Het design is vastgesteld, maar de implementatie loopt nog.
                Gebruik dit nog niet als startpunt voor een gemeente-implementatie.
              </Paragraph>
            </Alert>
            <section>
              <Heading level={1}>Taken</Heading>
              <Tabs
                key={tabsKey}
                tabData={[
                  {
                    // TODO: replace brackets with number-badge when component on Den Haag side has been updated
                    label: `Open taken (${openTaken.length})`,
                    panelContent: (
                      <>
                        {openTaken.map((taak) => (
                          <ActionSingle
                            key={taak.id}
                            className={'todo-action--single'}
                            labels={labels}
                            // TODO: change URL into the Taak detail page later
                            link={paths.zaakDetail}
                            now={now}
                            dateTime={taak.dateTime}
                            relativeDate
                            locale="nl-NL"
                          >
                            <strong>{taak.title}</strong>
                          </ActionSingle>
                        ))}
                      </>
                    ),
                  },
                  {
                    // TODO: replace brackets with number-badge when component on Den Haag side has been updated
                    label: `Afgerond (${afgerondeTaken.length})`,
                    panelContent: (
                      <>
                        {afgerondeTaken.map((taak) => (
                          <ActionSingle
                            key={taak.id}
                            className={'todo-action--single'}
                            // TODO: change URL into the Taak detail page later
                            link={paths.zaakDetail}
                            labels={labels}
                            // No dateTime here on purpose — ActionDate hardcodes a numeric
                            // format ("2-10-2026") whenever relativeDate is false, with no
                            // way to override it via props. Formatting the date ourselves
                            // and passing it as `details` gets the long format the design
                            // needs ("2 oktober 2026") without the "vóór" prefix.
                            details={formatCompletedDate(taak.dateTime)}
                          >
                            <strong>{taak.title}</strong>
                          </ActionSingle>
                        ))}
                      </>
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
