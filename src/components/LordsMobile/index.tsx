import React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TopupTab from "./TopupTab";

const LordsMobile = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="lab API tabs example"
            className="font-semibold"
          >
            <Tab label="Flash top-up" value="1" />
            <Tab label="Quick top-up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="px-0">
          <TopupTab />
        </TabPanel>
        <TabPanel value="2" className="px-0">
          <TopupTab isQuick />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default LordsMobile;
