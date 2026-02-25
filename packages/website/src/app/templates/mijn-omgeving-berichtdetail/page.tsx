import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingBerichtDetail from '../../../../../storybook/src/templates/mijn-omgeving-berichtdetail/MijnOmgevingBerichtDetail';

export default function Page() {
  return (
    <MijnOmgevingBerichtDetail logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} paths={websitePaths} />
  );
}
