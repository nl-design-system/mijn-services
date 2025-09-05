import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
  FormFieldTextarea,
  Heading1,
  Heading2,
  HeadingGroup,
  Icon,
  Link,
  LinkButton,
  PreHeading,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/2 - Uw vraag',
  id: 'wmebv-2-step-1',
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
      <HeadingGroup>
        <PreHeading>Stap 1 van 4</PreHeading>
        <Heading2>Uw vraag</Heading2>
      </HeadingGroup>
      <FormFieldTextarea label="Stel uw vraag" id="questionField" />
      <div>
        <p>Bestand toevoegen</p>
        <ul>
          <li>U kunt meerdere bestanden tegelijk toevoegen.</li>
          <li>U mag maximaal 10 Mb aan bestanden toevoegen.</li>
          <li>Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.</li>
        </ul>
        <Button appearance="secondary-action-button">Bestand kiezen</Button>
      </div>
      <ButtonGroup direction="column">
        <Button type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
          Volgende stap
        </Button>
        <LinkButton inline className="voorbeeld-button-link">
          Opslaan en later verder
        </LinkButton>
        <LinkButton inline className="voorbeeld-button-link">
          Stoppen met formulier
        </LinkButton>
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
