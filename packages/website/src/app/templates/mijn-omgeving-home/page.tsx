import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../../../../storybook/src/components/Logo';
import MijnOmgevingHome from '../../../../../storybook/src/templates/mijn-omgeving-home/MijnOmgevingHome';

export default function Page() {
  return <MijnOmgevingHome logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />} />;
}
