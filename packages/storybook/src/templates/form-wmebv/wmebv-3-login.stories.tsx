import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from '@utrecht/button-react/dist/css';
import {
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/3 - Login',
  id: 'wmebv-3-intro',
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
  logo?: ReactElement;
  theme: string;
  footerLogo?: ReactElement;
}) => (
  <>
    <Layout logo={logo} className={theme} footerLogo={footerLogo}>
      <Link href="/#" className="voorbeeld-back-link">
        <Icon>
          <IconArrowLeft />
        </Icon>
        Terug
      </Link>
      <Heading1>Vraag aan de gemeente</Heading1>
      <Heading2>Inloggen</Heading2>
      <Paragraph>
        Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed beschermd.
        Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
      </Paragraph>
      <ButtonGroup>
        <Button appearance={'primary-action-button'}>Inloggen</Button>
        <Button appearance={'secondary-action-button'}>Verder gaan zonder inloggen</Button>
      </ButtonGroup>
    </Layout>
  </>
);

export const Default: Story = {
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
