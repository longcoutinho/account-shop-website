import { NumberInput } from "@/components/NumberInput";
import { ItemProductMock } from "@/components/Products/mock";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const RightInfo = () => {
  const { t } = useTranslation("common");
  const item = ItemProductMock[0];
  const [amount, setAmount] = useState<number | null>(0);

  return (
    <div className="w-1/2 flex flex-col gap-6">
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-6">
        <div>
          <p>{t("CATEGORY")}</p>
          <div className="flex gap-4 flex-wrap mt-3">
            {item &&
              item?.category &&
              item?.category?.map((e) => (
                <p className="border border-gray-400 rounded-lg px-4 py-2 w-24 text-center">
                  {e}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-6">
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
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-6">
        <div className="flex items-center justify-between">
          <p>{t("REMAINING")}</p>
          <p>{item?.remaining + " " + t("PRODUCT")}</p>
        </div>
      </div>

      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-6">
        <div className="">
          <p>{t("PRICE")}</p>
          <FormControl className="w-full">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="EP"
              name="radio-buttons-group"
            >
              {item?.price &&
                item?.price?.map((e) => (
                  <div className="flex items-center justify-between w-full">
                    <FormControlLabel
                      value={e?.method}
                      control={<Radio />}
                      label={e?.method}
                    />
                    <p>
                      {e?.amount?.toLocaleString("vi-VN") + " " + e?.currency}
                    </p>
                  </div>
                ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className=" w-full flex gap-6">
        <Button
          //   onClick={handleAddtoCart}
          style={{ border: "1px solid #0e1522" }}
          className={`w-full  !text-[#052d75] !min-h-11 !mt-4 !capitalize
               ${
                 amount
                   ? "!cursor-pointer !hover:bg-[#052d751f]"
                   : "!cursor-not-allowed !opacity-50 !hover:bg-white"
               }
            `}
        >
          {t("ADD_TO_CART")}
        </Button>
        <Button
          //   onClick={handleClickBuyNow}
          className={`w-full !bg-[#052d75] !text-white !min-h-11 !mt-4 !capitalize ${
            amount
              ? "!cursor-pointer !hover:bg-[#30466b]"
              : "!cursor-not-allowed !opacity-50 !hover:bg-[#052d75] !hover:text-white"
          }`}
        >
          {t("BUY_NOW")}
        </Button>
      </div>
    </div>
  );
};
export default RightInfo;
