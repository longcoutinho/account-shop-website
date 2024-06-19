import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Products from "@/components/Products";

const ProductsPage = () => {
  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <p className="font-bold text-2xl mb-4 ">{PAGE_TITLE.PRODUCTS}</p>
      <Products />
    </Page>
  );
};
export default ProductsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
