import { Meta, StoryObj } from '@storybook/react-vite';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  ButtonLink,
  Heading1,
  Icon,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { ReactElement } from 'react';
import docs from './wmebv-1-intro.md?raw';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/1 - Intro',
  id: 'wmebv-1-intro',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: docs,
      },
    },
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
    <Link href="/#" className="voorbeeld-back-link">
      <Icon>
        <IconArrowLeft />
      </Icon>
      Terug
    </Link>
    <Heading1>Vraag aan de gemeente</Heading1>
    <Paragraph lead>
      Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel dan uw
      vraag via het contactformulier.
    </Paragraph>
    <UnorderedList>
      <UnorderedListItem>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</UnorderedListItem>
      <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
      <UnorderedListItem>
        Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of printen.
      </UnorderedListItem>
    </UnorderedList>
    <ButtonLink appearance="primary-action-button">Doorgaan</ButtonLink>
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
