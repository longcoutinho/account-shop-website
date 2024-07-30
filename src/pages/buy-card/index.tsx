import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ListCard from "@/components/BuyCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchListCard } from "@/redux/slices/card";

const BuyCard = () => {
  const dispatch = useDispatch<AppDispatch>();

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
    <Page title={PAGE_TITLE.BUY_CARD} menuIndex={1}>
      <p className="font-bold text-2xl mb-4 ">{PAGE_TITLE.BUY_CARD}</p>
      <ListCard />
    </Page>
  );
};
export default BuyCard;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
