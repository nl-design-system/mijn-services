import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import { FormField, FormLabel, HeadingGroup, LinkButton } from '@utrecht/component-library-react';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  PreHeading,
  Textarea,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from './components/Layout';
import { DenHaagLogo, PageHeaderLogo } from './components/Logo';
import { VoorbeeldFooterLogo } from '../mijn-profiel/components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/3 - Stap 1',
  id: 'wmebv-3-step-1',
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
      <FormField label={<FormLabel htmlFor="questionField">Stel uw vraag</FormLabel>}>
        <Textarea id="questionField" />
      </FormField>
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
