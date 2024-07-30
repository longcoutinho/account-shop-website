import { Backend } from "@/constants";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";
import { RootState } from "@/redux/store";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

interface IProps {
  item?: ICardsRes;
}

const LeftInfo = ({ item }: IProps) => {
  const { category } = useSelector((state: RootState) => state.typeProduct);
  const [seeMore, setSeeMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedPreview(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPreview(null);
  };
  return (
    <>
      {item && (
        <div className=" w-fulls border rounded-2xl shadow-md h-fit flex items-center py-2 px-6 gap-2">
          <div className="flex flex-wrap gap-2 my-4 ">
            {
              item && (
                // item?.imagePathList &&
                // productDetail?.imagePathList?.slice(0, 9)?.map((e, index) => (
                <Box
                  // key={index}
                  component="img"
                  src={item?.image}
                  alt={`Preview `}
                  // onClick={() => handleImageClick(e)}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    borderRadius: 1,
                    border: "1px solid gray",
                    cursor: "pointer",
                  }}
                />
              )
              // ))
            }
          </div>
          <div className=" flex gap-6">
            {/* {productDetail?.imagePathList && (
              <Box
                component={"img"}
                src={Backend.BASE_URL + productDetail?.imagePathList[0]}
                alt=""
                className="rounded-2xl "
                sx={{
                  width: 150,
                  height: 100,
                  objectFit: "cover",
                  border: "2px solid #80808079",
                }}
              />
            )} */}
            <div>
              {/* {category && (
                <p className=" text-gray-500 text-sm">
                  {category?.find((e) => e.id === productDetail?.typeId)?.name}
                </p>
              )} */}
              <p className="text-xl font-semibold">{item?.name}</p>
            </div>
          </div>

          {/* {productDetail?.description && (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: productDetail?.description }}
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
          )} */}
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
