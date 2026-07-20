import { Meta, StoryObj } from '@storybook/react-vite';
import MijnPlanTakenOverzicht from './MijnPlanTakenOverzicht';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../../components/Logo';
import { storybookPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Concepts/MijnPlan/TakenOverzicht',
  component: MijnPlanTakenOverzicht,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'concepts-mijnplan-taken-overzicht',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnPlanTakenOverzicht>;

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
