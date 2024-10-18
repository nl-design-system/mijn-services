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
  Heading1,
  Heading2,
  Icon,
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
    <div className="todo-profile-page-layout">
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
            <SidenavLink href="/#">
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
            <SidenavLink href="/#" current>
              <IconUser />
              Gegevens
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
      </Sidenav>
      <div>
        <Heading1>Uw gegevens</Heading1>
        <ExpandableSection title="Panel 1" description="This is a brief description that is always visible.">
          <p>This is the content of the first panel.</p>
        </ExpandableSection>
        <ExpandableSection title="Panel 2" description="This is another description for the second panel.">
          <p>This is the content of the second panel.</p>
        </ExpandableSection>
      </div>
    </div>
  </Layout>
);

export const Default: Story = {
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  render: () => (
    <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} footerLogo={<Heading2>Gemeente Den Haag</Heading2>} />
  ),
};
