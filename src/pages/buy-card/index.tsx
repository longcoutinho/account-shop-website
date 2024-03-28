import Page from "@/layouts";
import SelectCard from "../../components/BuyCard/Cards";
import { PAGE_TITLE } from "@/constants";

const BuyCard = () => {
  return (
    <Page title={PAGE_TITLE.BUY_CARD} menuIndex={1}>
      <SelectCard />
    </Page>
  );
};
export default BuyCard;
