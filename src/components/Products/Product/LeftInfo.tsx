import { Backend } from "@/constants";
import { RootState } from "@/redux/store";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const LeftInfo = () => {
  const { productDetail } = useSelector((state: RootState) => state.product);
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      {productDetail && (
        <div className=" w-full mg:w-1/2 border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-2">
          <div className=" flex gap-6">
            {productDetail?.imagePathList && (
              <Image
                src={Backend.BASE_URL + productDetail?.imagePathList[0]}
                alt=""
                width={80}
                height={80}
                className="rounded-2xl"
              />
            )}
            <div>
              {/* <p>{productDetail.des}</p> */}
              {/* <p className="text-lg font-semibold">{productDetail?.name}</p> */}
            </div>
          </div>
          {productDetail?.description && (
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
          )}
        </div>
      )}
    </>
  );
};
export default LeftInfo;
