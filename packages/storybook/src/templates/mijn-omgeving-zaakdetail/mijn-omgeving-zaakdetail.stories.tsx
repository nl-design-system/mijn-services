import { Grid } from '@amsterdam/design-system-react';
import { ActionMulti } from '@gemeente-denhaag/action';
import { File } from '@gemeente-denhaag/file';
import { Status } from '@gemeente-denhaag/process-steps';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
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
    <Grid paddingTop={'x-large'}>
      <Grid.Cell span={4} className={'todo-grid-cell__hide-on-medium'}>
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconLayoutGrid />
                Home
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <IconInbox />
                Berichten
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#" current>
                <IconArchive />
                Lopende zaken
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
