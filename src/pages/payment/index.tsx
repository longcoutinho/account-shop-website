import Page from "@/layouts";

import { PAGE_TITLE } from "@/constants";
import Payment from "@/components/Payment";

const PaymentPage = () => {
  return (
    <Page title={PAGE_TITLE.PAYMENT} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.PAYMENT}</p>
      <Payment />
    </Page>
  );
};
export default PaymentPage;
