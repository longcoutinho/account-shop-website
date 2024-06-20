import LeftInfo from "@/components/Products/Product/LeftInfo";
import RightInfo from "@/components/Products/Product/RightInfo";
import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { ArrowBack } from "@mui/icons-material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const DetailProduct = () => {
  const router = useRouter();

  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <div
        onClick={() => router.push(PageURL.PRODUCTS)}
        className="flex gap-2 mb-4 cursor-pointer"
      >
        <ArrowBack />
        <p className="hover:underline">Back</p>
      </div>
      <div className="flex gap-8">
        <LeftInfo />
        <RightInfo />
      </div>
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
