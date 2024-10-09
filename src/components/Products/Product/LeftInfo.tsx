import { Backend } from "@/constants";
import { RootState } from "@/redux/store";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Dialog, DialogContent, Tab } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import Review from "./Review";

const LeftInfo = () => {
  const { t } = useTranslation("common");
  const { productDetail } = useSelector((state: RootState) => state.product);
  const { category } = useSelector((state: RootState) => state.typeProduct);
  const [seeMore, setSeeMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [tab, setTab] = useState("1");

  const handleImageClick = (url: string) => {
    setSelectedPreview(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPreview(null);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <>
      {productDetail && (
        <div className=" w-full mg:w-1/2 border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-2">
          <div className=" flex gap-6">
            <div>
              {category && (
                <p className=" text-gray-500 text-sm">
                  {category?.find((e) => e.id === productDetail?.typeId)?.name}
                </p>
              )}
              <p className="text-xl font-semibold">{productDetail?.name}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 my-4 ">
            {productDetail &&
              productDetail?.imagePathList &&
              productDetail?.imagePathList?.slice(0, 9)?.map((e, index) => (
                <Box
                  key={index}
                  component="img"
                  src={Backend.BASE_URL + e}
                  alt={`Preview ${index + 1}`}
                  onClick={() => handleImageClick(e)}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    borderRadius: 1,
                    border: "1px solid gray",
                    cursor: "pointer",
                  }}
                />
              ))}
          </div>
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChangeTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="lab API tabs example"
                className="font-semibold"
              >
                <Tab label={t("DESCRIPTION")} value="1" />
                <Tab label={t("REVIEWS")} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className="px-0">
              {productDetail?.description && (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productDetail?.description,
                    }}
                    className={`${!seeMore && "line-clamp-4"}`}
                  ></div>
                  {!seeMore && (
                    <div
                      className="h-10 text-center cursor-pointer"
                      onClick={() => setSeeMore(true)}
                    >
                      <KeyboardDoubleArrowDown className="see-more text-orange-500" />
                    </div>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel value="2" className="px-0">
              <Review />
            </TabPanel>
          </TabContext>
        </div>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {selectedPreview && (
            <Box
              component="img"
              src={Backend.BASE_URL + selectedPreview}
              alt="Selected Preview"
              sx={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
export default LeftInfo;
