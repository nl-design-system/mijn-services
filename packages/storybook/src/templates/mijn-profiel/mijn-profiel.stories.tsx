import { Grid } from '@amsterdam/design-system-react';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { Meta, StoryObj } from '@storybook/react';
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

const meta = {
  title: 'Templates/Mijn Profiel/Mijn Gegevens',
  id: 'mijn-profiel-1',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
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
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
