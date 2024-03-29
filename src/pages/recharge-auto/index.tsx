import Page from "@/layouts";
import SelectCard from "../../components/BuyCard/Cards";
import SelectGame from "../../components/BuyCard/Games";
import { PAGE_TITLE } from "@/constants";

const RechargeCardAuto = () => {
  return (
    <Page title={PAGE_TITLE.RECHARGE_AUTO} menuIndex={1}>
      <SelectGame auto />
    </Page>
  );
};
export default RechargeCardAuto;
