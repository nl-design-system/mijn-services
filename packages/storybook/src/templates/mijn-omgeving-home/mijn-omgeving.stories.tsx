import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { ActionSingle } from '@gemeente-denhaag/action';
import { CaseCard } from '@gemeente-denhaag/card';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '../../themes/index.scss';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronRight,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconInfoCircle,
  IconLayoutGrid,
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
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Mijn Omgeving/Overzichtspagina',
  id: 'mijn-omgeving-1',
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
            Mijn gegevens
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
        <main id="main">
          <Alert icon={<IconInfoCircle className="utrecht-icon" />}>
            <Heading level={1} appearance="level-3">
              Heading
            </Heading>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
          </Alert>
          <Heading level={2} appearance="level-1">
            Hallo Jeroen van Drouwen
          </Heading>
          <Paragraph>
            In ‘Mijn omgeving’ kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld uw
            rekeningen betalen en zien wanneer uw aanvraag klaar is.
          </Paragraph>
          <section>
            <Heading level={2}>Wat moet ik regelen</Heading>
            <ActionSingle className={'todo-action--single'} link={'#'} labels={labels}>
              <strong>Geef informatie voor uw aanvraag subsidie geluidisolatie</strong>
            </ActionSingle>
            <ActionSingle className={'todo-action--single'} link={'#'} labels={labels}>
              <strong>Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein</strong>
            </ActionSingle>
            <ActionSingle className={'todo-action--single'} link={'#'} labels={labels}>
              <strong>Verleng uw identiteitskaart</strong>
            </ActionSingle>
          </section>
          <section>
            <Heading level={2}>Lopende zaken</Heading>
            <div className={'todo-card-layout'}>
              <CaseCard title={'Aanvraag subsidie geluidsisolatie'} href={'#'} context={'ZK-228402'} />
              <CaseCard title={'Aanvraag parkeervergunning'} href={'#'} context={'ZK-108422'} />
            </div>
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

export const RHCTheme: Story = {
  parameters: {
    theme: 'rhc-theme',
  },
  render: () => <TemplatePage logo={<PageHeaderLogo />} />,
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
