import { Meta, StoryObj } from '@storybook/react-vite';
import MijnOmgevingHome from './MijnOmgevingHome';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/MijnOmgeving/Overzichtspagina',
  component: MijnOmgevingHome,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-omgeving-1',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnOmgevingHome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    theme: 'voorbeeld-theme',
  },
  args: {
    logo: <PageHeaderLogo />,
    footerLogo: <VoorbeeldFooterLogo />,
  },
};

export const DenHaagTheme: Story = {
  parameters: {
    theme: 'denhaag-theme',
  },
  args: {
    logo: <DenHaagLogo />,
  },
};

export const RHCTheme: Story = {
  parameters: {
    theme: 'rhc-theme',
  },
  args: {
    logo: <PageHeaderLogo />,
  },
};
