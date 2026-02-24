import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import MijnOmgevingTakenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-taken-overzicht/MijnOmgevingTakenOverzicht';

export default function Page() {
  return <MijnOmgevingTakenOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
