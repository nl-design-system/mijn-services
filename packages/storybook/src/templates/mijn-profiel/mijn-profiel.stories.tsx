import { Grid } from '@amsterdam/design-system-react';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';
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
  IconPencil,
  IconPlus,
  IconUser,
} from '@tabler/icons-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Icon,
  LinkList,
  LinkListLink,
  PreserveData,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { ExpandableSection } from '../../components/ExpandableSection';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';
import { mijnOmgevingPaths } from '../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Templates/MijnProfiel/MijnGegevens',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-profiel-1',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
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
            Mijn gegevens
          </BreadcrumbNavLink>
        </BreadcrumbNav>
      </Grid.Cell>

      <Grid.Cell span={3} className={'todo-grid-cell--hide-on-medium'}>
        <SideNavigationBase>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href={mijnOmgevingPaths.overzicht}>
                <IconLayoutGrid />
                Overzicht
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
          <SideNavigationList>
            <SideNavigationItem>
              <SideNavigationLink href={mijnOmgevingPaths.taken}>
                <IconListCheck />
                Mijn taken
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href={mijnOmgevingPaths.berichtenOverzicht}>
                <IconInbox />
                Mijn berichten <NumberBadge>2</NumberBadge>
              </SideNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem>
              <SideNavigationLink href={mijnOmgevingPaths.zakenOverzicht}>
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
              <SideNavigationLink href={mijnOmgevingPaths.mijnGegevens} current>
                <IconUser />
                Mijn gegevens
              </SideNavigationLink>
            </SideNavigationItem>
          </SideNavigationList>
        </SideNavigationBase>
      </Grid.Cell>

      <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
        <main id="main">
          <Heading level={1}>Uw gegevens</Heading>
          <ExpandableSection
            title="Contact"
            description="Hier vindt u uw e-mailadres en telefoonnummer waarmee we u kunnen bereiken."
          >
            <DataList className="voorbeeld-datalist-style">
              <DataListItem className="voorbeeld-data-list-item">
                <DataListKey>
                  <b>E-mailadres</b>
                </DataListKey>
                <DataListValue>
                  <PreserveData>j.vandrouwen@gmail.com</PreserveData>
                </DataListValue>
                <Link href="/#" className="voorbeeld-back-link">
                  <Icon>
                    <IconPencil />
                  </Icon>
                  Aanpassen
                </Link>
              </DataListItem>
              <DataListItem className="voorbeeld-data-list-item">
                <DataListKey>
                  <b>Telefoonnummer</b>
                </DataListKey>
                <DataListValue>
                  <PreserveData>-</PreserveData>
                </DataListValue>
                <Link href="/#" className="voorbeeld-back-link">
                  <Icon>
                    <IconPlus />
                  </Icon>
                  Toevoegen
                </Link>
              </DataListItem>
            </DataList>
          </ExpandableSection>
          <ExpandableSection
            title="Meldingen"
            description="Stel in waarvoor u meldingen wilt ontvangen en op welke manier."
          ></ExpandableSection>
          <ExpandableSection
            title="Persoonsgegevens"
            description="Dit zijn uw persoonsgegevens zoals naam, bsn, etc."
          ></ExpandableSection>
          <ExpandableSection
            title="Adres"
            description="Dit zijn uw adresgegevens; u kunt hier ook een verhuizing doorgeven"
          ></ExpandableSection>
          <section>
            <Heading level={2}>Wijzigingen en aanvragen BRP</Heading>
            <LinkList>
              <LinkListLink
                href="#"
                icon={
                  <Icon>
                    <IconChevronRight />
                  </Icon>
                }
              >
                Meer informatie over adresonderzoek
              </LinkListLink>
              <LinkListLink
                href="#"
                icon={
                  <Icon>
                    <IconChevronRight />
                  </Icon>
                }
              >
                Gegevens in BRP laten corrigeren, wijzigen of verwijderen
              </LinkListLink>
              <LinkListLink
                href="#"
                icon={
                  <Icon>
                    <IconChevronRight />
                  </Icon>
                }
              >
                Geheimhouding persoonsgegevens aanvragen
              </LinkListLink>
            </LinkList>
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
