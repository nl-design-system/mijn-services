import MijnOmgevingGegevensOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-gegevens-overzicht/MijnOmgevingGegevensOverzicht';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';

export default function Page() {
  return <MijnOmgevingGegevensOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
