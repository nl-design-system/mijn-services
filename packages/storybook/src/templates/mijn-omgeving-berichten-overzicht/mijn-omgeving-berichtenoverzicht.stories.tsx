import { Meta, StoryObj } from '@storybook/react-vite';
import MijnOmgevingBerichtenOverzicht from './MijnOmgevingBerichtenOverzicht';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/MijnOmgeving/MijnBerichten/Overzicht',
  component: MijnOmgevingBerichtenOverzicht,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-omgeving-berichten-overzicht',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnOmgevingBerichtenOverzicht>;

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
