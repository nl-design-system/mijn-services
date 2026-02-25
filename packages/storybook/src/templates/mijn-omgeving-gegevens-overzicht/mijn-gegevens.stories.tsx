import { Meta, StoryObj } from '@storybook/react-vite';
import MijnOmgevingGegevensOverzicht from './MijnOmgevingGegevensOverzicht';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';
import { storybookPaths } from '../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Templates/MijnOmgeving/MijnGegevens/Overzicht',
  component: MijnOmgevingGegevensOverzicht,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-profiel-1',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnOmgevingGegevensOverzicht>;

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
