import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconCircleCheck, IconFileText, IconPrinter } from '@tabler/icons-react';
import {
  Alert,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Paragraph,
  PreserveData,
  Strong,
  UnorderedList,
  UnorderedListItem,
  URLData,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/6 - Succes',
  id: 'wmebv-success',
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
  <>
    <Layout logo={logo} className={theme} footerLogo={footerLogo}>
      <Alert type="ok">
        <Heading1>
          <Icon>
            <IconCircleCheck size={32} />
          </Icon>
          Uw aanvraag is met succes verstuurd
        </Heading1>
        <Paragraph>
          Zaaknummer: <PreserveData>2bf9-cne2-9910</PreserveData>
        </Paragraph>
      </Alert>
      <Heading2>Wat gaat er nu gebeuren?</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          U ontvangt een bevestigingsmail op{' '}
          <Strong>
            <URLData>j.vandrouwen@gmail.com</URLData>
          </Strong>
        </UnorderedListItem>
        <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
      </UnorderedList>
      <ButtonGroup direction="column">
        <Link href="#">
          <Icon>
            <IconPrinter />
          </Icon>
          Print uw vraag
        </Link>
        <Link href="/" download="vraag.pdf">
          <Icon>
            <IconFileText />
          </Icon>
          Download uw vraag als PDF
        </Link>
        <Link href="/#">
          Terug naar <URLData>gemeentevoorbeeld.nl</URLData>
        </Link>
      </ButtonGroup>
    </Layout>
  </>
);

export const Default: Story = {
  parameters: {
    theme: 'voorbeeld-theme',
  },
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  parameters: {
    theme: 'denhaag-theme',
  },
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
