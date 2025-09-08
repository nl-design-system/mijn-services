import { Grid } from '@amsterdam/design-system-react';
import { ActionMulti } from '@gemeente-denhaag/action';
import { File } from '@gemeente-denhaag/file';
import { Status } from '@gemeente-denhaag/process-steps';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../tokens.css';
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
  ButtonLink,
  Heading1,
  Heading2,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Mijn Omgeving/Zaken/Detailpagina',
  id: 'mijn-omgeving-zaken-detailpagina',
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
    <Grid paddingTop={'x-large'}>
      <Grid.Cell span={{ narrow: 3, medium: 6, wide: 12 }}>
        <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header">
          <h2 id="hidden-breadcrumb-header" hidden>
            Kruimelpad
          </h2>
          <BreadcrumbNavLink href={'/#'}>Mijn Voorbeeld</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'}>Lopende zaken</BreadcrumbNavLink>
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
        <Heading1>Hallo Jeroen van Drouwen</Heading1>
        <ActionMulti
          actions={<ButtonLink appearance={'primary-action-button'}>Informatie geven</ButtonLink>}
          labels={labels}
          dateTime="2024-11-22"
          now="2024-11-20"
          relativeDate={true}
        >
          <strong>Geef informatie voor uw aanvraag subsidie geluidsisolatie</strong>
        </ActionMulti>
        <Heading2>Status</Heading2>
        {timeline}
        <Heading2>Documenten</Heading2>
        <File
          className={'todo-file-component'}
          name={'antwoord-formulier-deelname-onderzoek'}
          href={''}
          size={'658kb'}
          lastUpdated={'12-12-2024'}
        />
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
