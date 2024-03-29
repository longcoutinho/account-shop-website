import Page from "@/layouts";
import SelectGame from "../../components/BuyCard/Games";
import { PAGE_TITLE } from "@/constants";

const RechargeCardAuto = () => {
  return (
    <Page title={PAGE_TITLE.RECHARGE_AUTO} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.RECHARGE_AUTO}</p>
      <SelectGame auto />
    </Page>
  );
};
export default RechargeCardAuto;
