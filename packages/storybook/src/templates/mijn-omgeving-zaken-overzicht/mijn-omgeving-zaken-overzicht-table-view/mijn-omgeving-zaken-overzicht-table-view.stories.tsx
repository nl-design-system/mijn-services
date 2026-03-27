import { Meta, StoryObj } from '@storybook/react-vite';
import MijnOmgevingZakenOverzichtTableView from './MijnOmgevingZakenOverzichtTableView';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../../components/Logo';
import { storybookPaths } from '../../../components/template-navigation/mijnOmgevingPaths';

const meta = {
  title: 'Templates/MijnOmgeving/MijnZaken/Overzicht/TableView',
  component: MijnOmgevingZakenOverzichtTableView,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'mijn-omgeving-mijnzaken-overzicht-table-view',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MijnOmgevingZakenOverzichtTableView>;

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
