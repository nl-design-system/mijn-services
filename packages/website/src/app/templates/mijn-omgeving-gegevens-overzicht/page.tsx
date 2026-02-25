import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingGegevensOverzicht from '../../../../../storybook/src/templates/mijn-omgeving-gegevens-overzicht/MijnOmgevingGegevensOverzicht';

export default function Page() {
  return (
    <MijnOmgevingGegevensOverzicht
      logo={<PageHeaderLogo />}
      footerLogo={<VoorbeeldFooterLogo />}
      paths={websitePaths}
    />
  );
}
