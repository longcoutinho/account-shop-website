import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Products from "@/components/Products";
import Category from "@/components/Products/Category";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchCategory } from "@/redux/slices/typeProduct";
import { fetchListProduct } from "@/redux/slices/product";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    try {
      dispatch(fetchCategory());
      dispatch(fetchListProduct());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <Category />
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
