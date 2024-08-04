import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TopupTab = dynamic(() => import("@/components/LordsMobile/TopupTab"), {
  ssr: false,
});

const CastleClashPage = () => {
  return (
    <Page title={PAGE_TITLE.CASTLE_CLASH} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.CASTLE_CLASH}</p>
      <TopupTab />
    </Page>
  );
};
export default CastleClashPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
