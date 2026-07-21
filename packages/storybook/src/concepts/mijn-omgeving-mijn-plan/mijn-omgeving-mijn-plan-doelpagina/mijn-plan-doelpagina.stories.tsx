import { Meta, StoryObj } from '@storybook/react-vite';
import MijnPlanDoelPagina from './MijnPlanDoelPagina';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../../components/Logo';
import { storybookPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Concepts/MijnPlan/DoelPagina',
  component: MijnPlanDoelPagina,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'concepts-mijnplan-doel-pagina',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnPlanDoelPagina>;

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
