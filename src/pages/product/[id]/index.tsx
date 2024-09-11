import LeftInfo from "@/components/Products/Product/LeftInfo";
import RightInfo from "@/components/Products/Product/RightInfo";
import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { fetchListPaymentMethod } from "@/redux/slices/payment";
import { fetchDetailProduct } from "@/redux/slices/product";
import { AppDispatch, RootState } from "@/redux/store";
import { ArrowBack } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id as string));
    }
  }, [id]);
  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <div
        onClick={() => router.push(PageURL.PRODUCTS)}
        className="flex gap-2 mb-4 cursor-pointer"
      >
        <ArrowBack />
        <p className="hover:underline">Back</p>
      </div>
      {loading ? (
        <Skeleton
          variant="rounded"
          width={1700}
          height={200}
          animation="wave"
        />
      ) : (
        <div className="flex gap-8 flex-col mg:flex-row">
          <LeftInfo />
          <RightInfo />
        </div>
      )}
    </Page>
  );
};
export default DetailProduct;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
