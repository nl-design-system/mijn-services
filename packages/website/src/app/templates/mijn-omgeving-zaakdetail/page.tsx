import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingZaakDetail from '../../../../../storybook/src/templates/mijn-omgeving-zaakdetail/MijnOmgevingZaakDetail';

export default function Page() {
  return <MijnOmgevingZaakDetail logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} paths={websitePaths} />;
}
