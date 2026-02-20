import MijnOmgevingBerichtenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-berichten-overzicht/MijnOmgevingBerichtenOverzicht';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';

export default function Page() {
  return <MijnOmgevingBerichtenOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
