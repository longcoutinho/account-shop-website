import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LordsMobile = dynamic(() => import("@/components/LordsMobile"), {
  ssr: false,
});
const LordsMobilePage = () => {
  return (
    <></>
    // <Page title={PAGE_TITLE.LORDS_MOBILE} menuIndex={1}>
    //   <p className="font-bold text-2xl mb-4">{PAGE_TITLE.LORDS_MOBILE}</p>
    //   <LordsMobile />
    // </Page>
  );
};
export default LordsMobilePage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
