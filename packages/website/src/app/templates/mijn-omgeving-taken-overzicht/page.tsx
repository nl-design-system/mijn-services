import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingTakenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-taken-overzicht/MijnOmgevingTakenOverzicht';

export default function Page() {
  return (
    <MijnOmgevingTakenOverzicht logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} paths={websitePaths} />
  );
}
