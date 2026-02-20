import MijnOmgevingBerichtDetail from '../../../../../storybook/src/templates/mijn-omgeving-berichtdetail/MijnOmgevingBerichtDetail';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';

export default function Page() {
  return <MijnOmgevingBerichtDetail logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
