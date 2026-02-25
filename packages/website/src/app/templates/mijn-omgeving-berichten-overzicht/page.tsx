import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingBerichtenOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-berichten-overzicht/MijnOmgevingBerichtenOverzicht';

export default function Page() {
  return (
    <MijnOmgevingBerichtenOverzicht
      logo={<PageHeaderLogo />}
      footerLogo={<VoorbeeldFooterLogo />}
      paths={websitePaths}
    />
  );
}
