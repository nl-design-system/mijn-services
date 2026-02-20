import MijnOmgevingZaakDetail from '../../../../../storybook/src/templates/mijn-omgeving-zaakdetail/MijnOmgevingZaakDetail';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';

export default function Page() {
  return <MijnOmgevingZaakDetail logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
