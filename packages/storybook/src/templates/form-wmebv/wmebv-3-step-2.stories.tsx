import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@utrecht/design-tokens/dist/theme.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
  FormFieldTextbox,
  Heading1,
  Heading2,
  HeadingGroup,
  Icon,
  Link,
  LinkButton,
  LogoImage,
  Paragraph,
  PreHeading,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/4 - Stap 2',
  id: 'wmebv-3-step-2',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ logo, footerLogo }: { logo?: ReactElement; footerLogo?: ReactElement }) => (
  <>
    <Layout logo={logo} footerLogo={footerLogo}>
      <Link href="/#" className="voorbeeld-back-link">
        <Icon>
          <IconArrowLeft />
        </Icon>
        Terug
      </Link>
      <Heading1>Vraag aan de gemeente</Heading1>
      <HeadingGroup>
        <PreHeading>Stap 2 van 4</PreHeading>
        <Heading2>Uw gegevens</Heading2>
      </HeadingGroup>
      <Paragraph>
        Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet met
        anderen gedeeld.
      </Paragraph>
      <FormFieldTextbox label="Naam" id="nameField" autoComplete="name" required />
      <FormFieldTextbox label="Straat" id="streetField" autoComplete="street-address" required />
      <FormFieldTextbox label="Huisnummer" id="houseField" required />
      <FormFieldTextbox label="Toevoeging" id="houseAdditionField" description="Niet verplicht." />
      <FormFieldTextbox label="Postcode" id="postcodeField" autoComplete="postal-code" required />
      <FormFieldTextbox label="Woonplaats" id="placeField" required />
      <FormFieldTextbox label="E-mailadres" id="emailField" autoComplete="email" type="email" required />
      <FormFieldTextbox
        label="Telefoonnummer"
        id="phoneField"
        description="Niet verplicht."
        autoComplete="tel"
        type="tel"
      />
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
  parameters: {
    theme: 'voorbeeld-theme',
  },
  render: () => <TemplatePage logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />,
};

export const DenHaagTheme: Story = {
  parameters: {
    theme: 'denhaag-theme',
  },
  render: () => <TemplatePage logo={<DenHaagLogo />} />,
};
export const UtrechtTheme: Story = {
  parameters: {
    theme: 'utrecht-theme',
  },
  render: () => <TemplatePage logo={<LogoImage />} />,
};
