import Page from "@/layouts";
import SelectCard from "../../components/BuyCard/Cards";
import SelectGame from "../../components/BuyCard/Games";
import { PAGE_TITLE } from "@/constants";

const RechargeGameCard = () => {
  return (
    <Page title={PAGE_TITLE.RECHARGE} menuIndex={1}>
      <SelectGame />
      <SelectCard />
    </Page>
  );
};
export default RechargeGameCard;
