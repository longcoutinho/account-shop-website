import Page from "@/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PAGE_TITLE } from "@/constants";
import { useTranslation } from "next-i18next";
import DepositResult from "@/components/Deposit";

const DepositPage = () => {
  const { t } = useTranslation("common");
  return (
    <Page title={t(`${PAGE_TITLE.PAYMENT}`)} menuIndex={1}>
      <DepositResult />
    </Page>
  );
};
export default DepositPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
