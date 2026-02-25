import { Meta, StoryObj } from '@storybook/react-vite';
import MijnOmgevingZaakDetail from './MijnOmgevingZaakDetail';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';
import { storybookPaths } from '../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Templates/MijnOmgeving/MijnZaken/Detailpagina',
  component: MijnOmgevingZaakDetail,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-omgeving-mijnzaken-detailpagina',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnOmgevingZaakDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    theme: 'voorbeeld-theme',
  },
  args: {
    logo: <PageHeaderLogo />,
    footerLogo: <VoorbeeldFooterLogo />,
    paths: storybookPaths,
  },
};

export const DenHaagTheme: Story = {
  parameters: {
    theme: 'denhaag-theme',
  },
  args: {
    logo: <DenHaagLogo />,
    paths: storybookPaths,
  },
};
