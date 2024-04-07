import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import dynamic from "next/dynamic";
const TopupTab = dynamic(() => import("@/components/LordsMobile/TopupTab"), {
  ssr: false,
});
const CastleClashPage = () => {
  return (
    <Page title={PAGE_TITLE.LORDS_MOBILE} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.LORDS_MOBILE}</p>
      <TopupTab />
    </Page>
  );
};
export default CastleClashPage;

