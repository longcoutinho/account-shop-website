import { NumberInput } from "@/components/NumberInput";
import { RootState } from "@/redux/store";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalAddress from "./ModalAddress";

const RightInfo = () => {
  const { t } = useTranslation("common");
  const { productDetail } = useSelector((state: RootState) => state.product);
  const { paymentMethods } = useSelector((state: RootState) => state.payment);
  const [amount, setAmount] = useState<number | null>(0);
  const [category, setCategory] = useState<number>();
  const [method, setMethod] = useState("");
  const [isOpenAddress, setIsOpenAddress] = useState<boolean>(false);

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod((event.target as HTMLInputElement).value);
  };

  const handleClickBuyNow = () => {
    if (amount && category && method !== "") {
      setIsOpenAddress(true);
    }
  };

  return (
    <div className="w-full mg:w-1/2 flex flex-col gap-3 xs:gap-6">
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div>
          <p>{t("CATEGORY")}</p>
          <div className="flex gap-2 xs:gap-4 flex-wrap mt-3">
            {productDetail &&
              productDetail?.categoryList &&
              productDetail?.categoryList?.map((e) => (
                <p
                  onClick={() => setCategory(e?.id)}
                  className={`border rounded-lg px-2 xs:px-4 py-2 text-xs xs:text-base w-16 xs:w-24 text-center cursor-pointer hover:border-orange-300 ${
                    category === e?.id
                      ? "border-orange-300 text-orange-600"
                      : "border-gray-400"
                  }`}
                >
                  {e?.name}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div className="flex items-center justify-between">
          <p>{t("QUANTITY")}</p>
          <NumberInput
            defaultValue={1}
            value={amount}
            min={1}
            onChange={(event, newValue) => setAmount(newValue)}
          />
        </div>
      </div>
      {/* <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div className="flex items-center justify-between">
          <p>{t("REMAINING")}</p>
          <p>{item?.remaining + " " + t("PRODUCT")}</p>
        </div>
      </div> */}

      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div className="">
          <p>{t("PRICE")}</p>
          <FormControl className="w-full">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleChangeMethod}
            >
              {productDetail?.feeList &&
                productDetail?.feeList?.map((e) => (
                  <div className="flex items-center justify-between w-full">
                    <FormControlLabel
                      value={e?.paymentCode}
                      control={<Radio />}
                      label={
                        paymentMethods &&
                        paymentMethods?.find((p) => p?.code === e?.paymentCode)
                          ? paymentMethods?.find(
                              (p) => p?.code === e?.paymentCode
                            )?.name
                          : e?.paymentCode
                      }
                    />
                    <p>
                      {e?.price?.toLocaleString("vi-VN") +
                        " " +
                        paymentMethods?.find((p) => p?.code === e?.paymentCode)
                          ?.currency}
                    </p>
                  </div>
                ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className=" w-full flex gap-6 justify-center">
        {/* <Button
          //   onClick={handleAddtoCart}
          style={{ border: "1px solid #0e1522" }}
          className={`w-full  !text-[#052d75] !min-h-11 !mt-4 !capitalize
               ${
                 amount && category && method !== ""
                   ? "!cursor-pointer !hover:bg-[#052d751f]"
                   : "!cursor-not-allowed !opacity-50 !hover:bg-white"
               }
            `}
        >
          {t("ADD_TO_CART")}
        </Button> */}
        <Button
          onClick={handleClickBuyNow}
          className={`w-1/2 !bg-[#052d75] !text-white !min-h-11 !mt-4 !capitalize ${
            amount && category && method !== ""
              ? "!cursor-pointer !hover:bg-[#30466b]"
              : "!cursor-not-allowed !opacity-50 !hover:bg-[#052d75] !hover:text-white"
          }`}
        >
          {t("BUY_NOW")}
        </Button>
      </div>
      {isOpenAddress && (
        <ModalAddress
          open={isOpenAddress}
          onClose={() => setIsOpenAddress(false)}
        />
      )}
    </div>
  );
};
export default RightInfo;
