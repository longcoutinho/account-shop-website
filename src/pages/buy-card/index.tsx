import Page from "@/layouts";
import SelectCard from "../../components/BuyCard/Cards";
import { PAGE_TITLE } from "@/constants";

const BuyCard = () => {
  return (
    <Page title={PAGE_TITLE.BUY_CARD} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.BUY_CARD}</p>
      <SelectCard />
    </Page>
  );
};
export default BuyCard;
