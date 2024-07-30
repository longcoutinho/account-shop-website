import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Products from "@/components/Products";
import Category from "@/components/Products/Category";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { fetchCategory } from "@/redux/slices/typeProduct";
import { fetchListProduct } from "@/redux/slices/product";
import { useTranslation } from "next-i18next";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [type, setType] = useState<number>(0);
  const { t } = useTranslation("common");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(fetchCategory());
      dispatch(fetchListProduct());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page title={t(PAGE_TITLE.ELITA_SHOP)} menuIndex={1}>
      <Category type={type ? type : 0} setType={setType} />
      <p className="font-bold text-2xl mb-4 ">{t(PAGE_TITLE.ELITA_SHOP)}</p>
      <Products type={type} />
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
