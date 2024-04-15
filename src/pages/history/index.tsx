import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import HistoryList from "@/components/History";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const HistoryPage = () => {
  const { t } = useTranslation("common");
  return (
    <Page title={t(`${PAGE_TITLE.HISTORY}`)} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{t(`${PAGE_TITLE.HISTORY}`)}</p>
      <HistoryList />
    </Page>
  );
};
export default HistoryPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
