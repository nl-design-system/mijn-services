import MijnOmgevingZakenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-zaken-overzicht/MijnOmgevingZakenOverzicht';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';

export default function Page() {
  return <MijnOmgevingZakenOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
