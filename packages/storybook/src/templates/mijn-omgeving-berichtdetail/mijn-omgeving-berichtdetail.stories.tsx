import { Grid } from '@amsterdam/design-system-react';
import { ActionMulti } from '@gemeente-denhaag/action';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import { File } from '@gemeente-denhaag/file';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { Meta, StoryObj } from '@storybook/react-vite';
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
  title: 'Templates/Mijn Omgeving/Berichten/Detailpagina',
  id: 'mijn-omgeving-mijnberichten-detailpagina',
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
          <BreadcrumbNavLink href={'/#'}>Gemeente Voorbeeld</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'}>Mijn Berichten</BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <Icon>
              <IconChevronRight />
            </Icon>
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href={'/#'} disabled current>
            Betalen van uw parkeerbon
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
              <SideNavigationLink href="/#" current>
                <IconInbox />
                Mijn berichten <NumberBadge>2</NumberBadge>
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href="/#">
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
          <Heading level={1}>Betalen van uw parkeerbon</Heading>
          <Paragraph>Ontvangen op 1 maart 2024 om 18.10 uur</Paragraph>
          <ActionMulti
            actions={<ButtonLink appearance={'primary-action-button'}>Betalen</ButtonLink>}
            className={'todo-action--multi'}
            labels={labels}
            dateTime="2023-03-01"
            now="2023-01-14"
            relativeDate={true}
          >
            <strong>Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein</strong>
          </ActionMulti>

          <Heading level={2}>Parkeerbon details</Heading>
          <DescriptionList
            className={'todo-description-list'}
            items={[
              {
                title: 'Reden',
                detail: 'Geen of niet voldoende parkeerbelasting betaald',
              },
              {
                title: 'Datum en tijd parkeren',
                detail: (
                  <>
                    maandag 2 januari 2025
                    <br />
                    12.10 uur
                  </>
                ),
              },
              {
                title: 'Kenteken',
                detail: 'SR-420-K',
              },
              {
                title: 'Plaats parkeren',
                detail: (
                  <>
                    Valeriusplein 1001
                    <br />
                    3820 Arnhem
                  </>
                ),
              },
              {
                title: 'Totaalbedrag',
                detail: '€ 110,50',
              },
            ]}
          />
          <Heading level={2}>Bericht</Heading>
          <Paragraph>Beste J. van Drouwen,</Paragraph>
          <Paragraph>
            U heeft te weinig of geen parkeerkosten betaald voor het parkeren bij Valeriusplein. Daarom heeft u een
            parkeerbon gekregen.
          </Paragraph>
          <Paragraph>Betaal vóór 1 maart 2023 uw parkeerbon van € 74.90.</Paragraph>
          <Paragraph>
            Bent u het niet eens met deze parkeerbon? Dan kunt u bezwaar maken. Vul het formulier{' '}
            <Link href="#">Bezwaar maken tegen een parkeerbon</Link> in.
          </Paragraph>
          <Paragraph>
            Met vriendelijke groet,
            <br />
            Gemeente Den Haag
          </Paragraph>
          <File
            className={'todo-file-component'}
            name={'parkeerbon-SR-420-K '}
            href={'test.png'}
            size={'240 kB'}
            lastUpdated={'March 22 2024 GMT+0200'}
          />
          <ActionMulti
            actions={<ButtonLink appearance={'primary-action-button'}>Betalen</ButtonLink>}
            labels={labels}
            dateTime="2023-03-01"
            now="2023-01-14"
            relativeDate={true}
          >
            <strong>Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein</strong>
          </ActionMulti>
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
