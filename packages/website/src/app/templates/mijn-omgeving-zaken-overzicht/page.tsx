import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingZakenOverzichtCardView from '../../../../../storybook/src/templates/mijn-omgeving-zaken-overzicht/mijn-omgeving-zaken-overzicht-card-view/MijnOmgevingZakenOverzichtCardView';

export default function Page() {
  return (
    <MijnOmgevingZakenOverzichtCardView
      logo={<PageHeaderLogo />}
      footerLogo={<VoorbeeldFooterLogo />}
      paths={websitePaths}
    />
  );
}
