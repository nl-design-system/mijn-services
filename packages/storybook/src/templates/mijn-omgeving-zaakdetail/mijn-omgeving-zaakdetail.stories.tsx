import { Grid } from '@amsterdam/design-system-react';
import { ActionMulti } from '@gemeente-denhaag/action';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import { File } from '@gemeente-denhaag/file';
import { Status } from '@gemeente-denhaag/process-steps';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import { Meta, StoryObj } from '@storybook/react-vite';
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
  ButtonLink,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/MijnOmgeving/MijnZaken/Detailpagina',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-omgeving-mijnzaken-detailpagina',
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
        <Link href={'/#'} className="todo-breadcrumb--mobile">
          <Icon>
            <IconChevronLeft />
          </Icon>
          Mijn zaken
        </Link>

        <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header" className="todo-breadcrumb--desktop">
          <h2 id="hidden-breadcrumb-header" hidden>
            Kruimelpad
          </h2>
          <BreadcrumbNavLink href={'/#'}>Mijn Voorbeeld</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'}>Mijn zaken</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'} disabled current>
            Aanvraag subsidie geluidsisolatie
          </BreadcrumbNavLink>
        </BreadcrumbNav>
      </Grid.Cell>

      <Grid.Cell span={3} className={'todo-grid-cell--hide-on-medium'}>
        <SideNavigationBase>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
                <IconLayoutGrid />
                Overzicht
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
                <IconListCheck />
                Mijn taken
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
                <IconInbox />
                Mijn berichten <NumberBadge>2</NumberBadge>
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href="/#" current>
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
              <SideNavigationLink href="/#">
                <IconUser />
                Mijn gegevens
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
        </SideNavigationBase>
      </Grid.Cell>

      <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
        <main id="main">
          <Heading level={1}>Hallo Jeroen van Drouwen</Heading>
          <ActionMulti
            actions={<ButtonLink appearance={'primary-action-button'}>Informatie geven</ButtonLink>}
            labels={labels}
            dateTime="2024-11-22"
            now="2024-11-20"
            relativeDate={true}
          >
            <strong>Geef informatie voor uw aanvraag subsidie geluidsisolatie</strong>
          </ActionMulti>
          <Heading level={2}>Status</Heading>
          {timeline}
          <Heading level={2}>Details</Heading>
          <DescriptionList
            items={[
              {
                title: 'Datum aanvraag',
                detail: '17 oktober 2022',
              },
              {
                title: 'Zaaknummer',
                detail: '11234899818',
              },
            ]}
          />
          <Heading level={2}>Documenten</Heading>
          <File
            className={'todo-file-component'}
            name={'antwoord-formulier-deelname-onderzoek'}
            href={''}
            size={'658kb'}
            lastUpdated={'12-12-2024'}
          />
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

const timeline = (
  <Status
    collapsible
    expandedSteps={['onderzoek']}
    steps={[
      {
        id: 'deelname',
        marker: 1,
        status: 'checked',
        steps: [
          {
            id: 0,
            status: 'checked',
            title: 'Aanmelding ontvangen',
          },
        ],
        title: 'Deelname aan geluidsonderzoek',
      },
      {
        id: 'onderzoek',
        marker: 2,
        status: 'current',
        steps: [
          {
            id: 1,
            status: 'checked',
            title: 'Afspraak meten geluidsoverlast gemaakt',
          },
          {
            status: 'checked',
            id: 2,
            title: 'Geluidsoverlast gemeten',
          },
        ],
        title: 'Onderzoek naar geluidsoverlast',
      },
      {
        id: 'uitvoeren',
        marker: 3,
        title: 'Uitvoeren van maatregelen',
      },
      {
        id: 'klaar',
        marker: 4,
        title: 'Maatregelen zijn uitgevoerd',
      },
    ]}
  />
);
