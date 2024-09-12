import LeftInfo from "@/components/BuyCard/LeftInfo";
import RightInfo from "@/components/BuyCard/RightInfo";
import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { fetchListCard } from "@/redux/slices/card";
import { fetchListPaymentMethod } from "@/redux/slices/payment";
import { AppDispatch, RootState } from "@/redux/store";
import { ArrowBack } from "@mui/icons-material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailCardGame = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<AppDispatch>();
  const { cards } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(fetchListCard());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page title={PAGE_TITLE.PRODUCTS} menuIndex={1}>
      <div
        onClick={() => router.push(PageURL.BUY_CARD)}
        className="flex gap-2 mb-4 cursor-pointer"
      >
        <ArrowBack />
        <p className="hover:underline">Back</p>
      </div>
      <div className="flex gap-8 flex-col">
        {cards && cards?.find((e) => e?.id === Number(id)) && (
          <LeftInfo item={cards?.find((e) => e?.id === Number(id))} />
        )}
        <RightInfo
          id={id?.toString()}
          card={cards?.find((e) => e?.id === Number(id))}
        />
      </div>
    </Page>
  );
};
export default DetailCardGame;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
