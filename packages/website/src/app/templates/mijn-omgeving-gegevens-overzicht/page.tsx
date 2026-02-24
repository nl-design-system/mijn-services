import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import MijnOmgevingGegevensOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-gegevens-overzicht/MijnOmgevingGegevensOverzicht';

export default function Page() {
  return <MijnOmgevingGegevensOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
