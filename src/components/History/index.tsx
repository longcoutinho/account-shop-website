import React from "react";
import AllSaleOrder from "../sale-order/SaleOrder";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTranslation } from "next-i18next";
import ProductOrders from "../sale-order/ProductOrders";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setTabHistory } from "@/redux/slices/state";

const HistoryList = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch<AppDispatch>();
  const { tabHistory } = useSelector((state: RootState) => state.state);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(setTabHistory(newValue));
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabHistory}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="lab API tabs example"
              className="font-semibold"
            >
              <Tab label={t("GAME_CARD")} value="1" />
              <Tab label={t("ELITA_SHOP")} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="px-0">
            <AllSaleOrder />
          </TabPanel>
          <TabPanel value="2" className="px-0">
            <ProductOrders />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
export default HistoryList;
