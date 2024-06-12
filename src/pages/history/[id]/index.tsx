import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OrderDetail from "@/components/History/OrderDetail";

const OrderDetailList = () => {
  const { t } = useTranslation("common");
  return (
    <Page title={t(`${PAGE_TITLE.ORDER}`)} menuIndex={1}>
      {/* <p className="font-bold text-2xl mb-4">{t(`${PAGE_TITLE.ORDER}`)}</p> */}
      <OrderDetail />
    </Page>
  );
};
export default OrderDetailList;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
