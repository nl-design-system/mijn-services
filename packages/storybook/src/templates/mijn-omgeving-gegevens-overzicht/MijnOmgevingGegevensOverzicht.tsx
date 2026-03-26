'use client';
import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid } from '@amsterdam/design-system-react';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '../../themes/index.scss';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronLeft,
  IconChevronRight,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconLayoutGrid,
  IconListCheck,
  IconParking,
  IconPencil,
  IconUser,
} from '@tabler/icons-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
  LinkList,
  LinkListLink,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from '../../components/Layout';
import { MijnOmgevingPaths } from '../../components/template-navigation/mijnOmgevingPaths';

export default function MijnOmgevingGegevensOverzicht({
  logo,
  footerLogo,
  paths,
}: {
  logo: ReactElement;
  footerLogo?: ReactElement;
  paths: MijnOmgevingPaths;
}) {
  return (
    <Layout logo={logo} footerLogo={footerLogo}>
      <Grid paddingTop={'x-large'}>
        <Grid.Cell span={{ narrow: 3, medium: 6, wide: 12 }}>
          <Link href={paths.overzicht} className="todo-breadcrumb--mobile">
            <Icon>
              <IconChevronLeft />
            </Icon>
            Gemeente Voorbeeld
          </Link>

          <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header" className="todo-breadcrumb--desktop">
            <h2 id="hidden-breadcrumb-header" hidden>
              Kruimelpad
            </h2>
            <BreadcrumbNavLink href={paths.overzicht}>Home</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={paths.overzicht}>Gemeente Voorbeeld</BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <Icon>
                <IconChevronRight />
              </Icon>
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href={paths.mijnGegevens} disabled current>
              Mijn gegevens
            </BreadcrumbNavLink>
          </BreadcrumbNav>
        </Grid.Cell>

        <Grid.Cell span={3} className={'todo-grid-cell--hide-on-medium'}>
          <SideNavigationBase>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.overzicht}>
                  <IconLayoutGrid />
                  Overzicht
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.taken}>
                  <IconListCheck />
                  Mijn taken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.berichtenOverzicht}>
                  <IconInbox />
                  Mijn berichten <NumberBadge>2</NumberBadge>
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href={paths.zakenOverzicht}>
                  <IconArchive />
                  Mijn zaken
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconCurrencyEuro />
                  Belastingzaken
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconHome />
                  WOZ
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconParking />
                  Parkeren
                </SideNavigationLink>
              </SideNavigationItem>
              <SideNavigationItem>
                <SideNavigationLink href="/#">
                  <IconBuildingCommunity />
                  Erfpacht
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
            <SideNavigationList>
              <SideNavigationItem>
                <SideNavigationLink href={paths.mijnGegevens} current>
                  <IconUser />
                  Mijn gegevens
                </SideNavigationLink>
              </SideNavigationItem>
            </SideNavigationList>
          </SideNavigationBase>
        </Grid.Cell>

        <Grid.Cell span={{ narrow: 3, medium: 6, wide: 9 }}>
          <main id="main">
            <Heading level={1}>Mijn gegevens</Heading>
            <Paragraph>
              Op deze pagina ziet u uw persoonlijke gegevens en hoe wij die gebruiken om contact met u te houden.
            </Paragraph>
            <SpotlightSection>
              <Heading level={3}>Op deze pagina</Heading>
              <UnorderedList>
                <UnorderedListItem>
                  <Link className="todo-link--list-item" href="#">
                    Contactgegevens
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link className="todo-link--list-item" href="#">
                    Persoonsgegevens
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link className="todo-link--list-item" href="#">
                    Adresgegevens
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link className="todo-link--list-item" href="#">
                    Meldingen
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
            </SpotlightSection>

            <Heading level={2}>Contactgegevens</Heading>
            <Link href="#" className="todo-link--with-icon">
              <Icon>
                <IconPencil />
              </Icon>{' '}
              Wijzig
            </Link>
            <DescriptionList
              items={[
                { title: 'E-mailadres', detail: 'j.vandrouwen@gmail.com' },
                { title: 'Telefoonnummer', detail: '-' },
              ]}
            />

            <Heading level={2}>Persoonsgegevens</Heading>
            <DescriptionList
              items={[
                { title: 'Voornamen', detail: 'Jeroen' },
                { title: 'Achternaam', detail: 'van Drouwen' },
                { title: 'Geslacht', detail: 'man' },
                { title: 'Burgerservicenummer', detail: '78967896789' },
                { title: 'Geboortedatum', detail: '01 april 1979' },
                { title: 'Geboorteland', detail: 'Nederland' },
                { title: 'Nationaliteit', detail: 'Nederlands' },
              ]}
            />

            <Heading level={3}>Zie ook</Heading>
            <LinkList>
              <LinkListLink>
                <Icon>
                  <IconChevronRight />
                </Icon>
                Meer informatie over wijzigen van persoonsgegevens
              </LinkListLink>
              <LinkListLink>
                <Icon>
                  <IconChevronRight />
                </Icon>
                Een andere actie die bij deze dataset hoort...
              </LinkListLink>
            </LinkList>

            <Heading level={2}>Adresgegevens</Heading>
            <DescriptionList
              items={[
                { title: 'Straat', detail: 'Laan der Voorbeelden 55' },
                { detail: 'Postcode en plaats', title: '1215 AA Dronten' },
                { title: 'Aanvangsdatum', detail: '05 november 2015' },
                { title: 'Aantal inwoners op uw woonadres', detail: '1' },
              ]}
            />
            <Link href="#" className="todo-link">
              Meer informatie over wijzigen van adresgegevens
            </Link>

            <Heading level={2}>Meldingen</Heading>
            <Link href="#" className="todo-link--with-icon">
              <Icon>
                <IconPencil />
              </Icon>{' '}
              Wijzig
            </Link>
            <DescriptionList
              items={[
                {
                  title: 'Post',
                  detail: 'U ontvangt altijd fysieke post als er een besluit is genomen.',
                },
                {
                  title: 'Email',
                  detail: (
                    <>
                      <Paragraph>U ontvangt altijd een ontvangstbevestiging, besluit en taak per email. </Paragraph>
                      <Paragraph>
                        {' '}
                        U ontvangt altijd meldingen over verlengen van uw Reisdocumenten per email.
                      </Paragraph>
                    </>
                  ),
                },
                {
                  title: 'SMS',
                  detail: (
                    <>
                      <Paragraph>U ontvangt altijd een SMS over Taken.</Paragraph>
                      <Paragraph>U ontvangt altijd een SMS over Reisdocumenten.</Paragraph>
                    </>
                  ),
                },
                {
                  title: 'Taal',
                  detail: 'De ingestelde taal voor meldingen is Nederlands.',
                },
              ]}
            />
          </main>
        </Grid.Cell>
      </Grid>
    </Layout>
  );
}
