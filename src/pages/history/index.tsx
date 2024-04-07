import Page from "@/layouts";
import { PAGE_TITLE } from "@/constants";
import HistoryList from "@/components/History";
const HistoryPage = () => {
  return (
    <Page title={PAGE_TITLE.HISTORY} menuIndex={1}>
      <p className="font-bold text-2xl mb-4">{PAGE_TITLE.HISTORY}</p>
      <HistoryList />
    </Page>
  );
};
export default HistoryPage;
