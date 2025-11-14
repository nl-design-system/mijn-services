import { Meta, StoryObj } from '@storybook/react-vite';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconArrowLeft, IconPencil } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Heading1,
  Heading2,
  Heading3,
  HeadingGroup,
  Icon,
  Link,
  LinkButton,
  MultilineData,
  PreHeading,
  PreserveData,
  URLData,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { DenHaagLogo, PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/5 - Stap 3',
  id: 'wmebv-3-step-3',
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
        <PreHeading>Stap 3 van 4</PreHeading>
        <Heading2>Controleer uw gegevens</Heading2>
      </HeadingGroup>
      <>
        <Heading3>Uw vraag</Heading3>
        <Link href="/#" className="voorbeeld-back-link">
          <Icon>
            <IconPencil />
          </Icon>
          Aanpassen
        </Link>
        <DataList>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Uw vraag</DataListKey>
            <DataListValue>
              <MultilineData>
                Beste meneer of mevrouw, Ik heb 4 weken geleden een aanvraag voor bijstandsuitkering aangevraagd maar ik
                heb nog steeds niets gehoord. Ik wil graag dat u dit oplost. Met vriendelijke groet, Jeroen van Drouwen
              </MultilineData>
            </DataListValue>
          </DataListItem>
        </DataList>
      </>
      <>
        <h3>Uw gegevens</h3>
        <Link href="/#" className="voorbeeld-back-link">
          <Icon>
            <IconPencil />
          </Icon>
          Aanpassen
        </Link>
        <DataList className="voorbeeld-datalist-style">
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Naam</DataListKey>
            <DataListValue>
              <PreserveData>Jeroen van Drouwen</PreserveData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Straat</DataListKey>
            <DataListValue>
              <PreserveData>Laan der Voorbeelden</PreserveData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Huisnummer</DataListKey>
            <DataListValue>
              <PreserveData>99</PreserveData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Postcode</DataListKey>
            <DataListValue>
              <PreserveData>1024 VP</PreserveData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Woonplaats</DataListKey>
            <DataListValue>
              <PreserveData>Voorbeeld</PreserveData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>E-mailadres</DataListKey>
            <DataListValue>
              <URLData>j.vandrouwen@gmail.com</URLData>
            </DataListValue>
          </DataListItem>
          <DataListItem className="voorbeeld-data-list-item">
            <DataListKey>Telefoonnummer</DataListKey>
            <DataListValue>
              <PreserveData>0650618346</PreserveData>
            </DataListValue>
          </DataListItem>
        </DataList>
      </>
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
