import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import { websitePaths } from '../../../../../storybook/src/components/template-navigation/mijnOmgevingPaths';
import MijnOmgevingHome from '../../../../../storybook/src/templates/mijn-omgeving-home/MijnOmgevingHome';

export default function Page() {
  return <MijnOmgevingHome logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} paths={websitePaths} />;
}
