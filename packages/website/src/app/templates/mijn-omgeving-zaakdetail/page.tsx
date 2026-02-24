import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import MijnOmgevingZaakDetail from '../../../../../storybook/src/templates/mijn-omgeving-zaakdetail/MijnOmgevingZaakDetail';

export default function Page() {
  return <MijnOmgevingZaakDetail logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
