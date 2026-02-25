import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingZakenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-zaken-overzicht/MijnOmgevingZakenOverzicht';

export default function Page() {
  return (
    <MijnOmgevingZakenOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} paths={websitePaths} />
  );
}
