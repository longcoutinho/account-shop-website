import { ItemProductMock } from "@/components/Products/mock";
import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

const DetailProduct = () => {
  const item = ItemProductMock[0];
  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <div className=" relative border rounded-2xl shadow-md h-52 pt-32 flex flex-col items-center gap-2 hover:border-orange-300">
        <Image
          src={item?.image}
          alt=""
          width={140}
          height={140}
          className="rounded-2xl absolute -top-7 "
        />
        <div>{item.des}</div>
        <div className="text-lg font-semibold">{item.title}</div>
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
