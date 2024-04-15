import Page from "@/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PAGE_TITLE } from "@/constants";
import Payment from "@/components/Payment";
import { useTranslation } from "next-i18next";

const PaymentPage = () => {
  const { t } = useTranslation("common");
  return (
    <Page title={t(`${PAGE_TITLE.PAYMENT}`)} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{t(`${PAGE_TITLE.PAYMENT}`)}</p>
      <Payment />
    </Page>
  );
};
export default PaymentPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
