import React, { useEffect, useState } from "react";
import {
  requestGetOrderDetail,
  requestGetOrderInfo,
} from "@/services/rechargeGameCard";
import { useRouter } from "next/router";
import { HTTP_STATUS } from "@/constants";
import CopyToClipboard from "react-copy-to-clipboard";
import { IconButton, Tooltip } from "@mui/material";
import Iconify from "../Iconify";
import ResultTransaction from "./ResultTransaction";
import { useTranslation } from "next-i18next";

interface IOrderDetail {
  cardItemId: string;
  cardName: string;
  cards: {
    code: string;
    serial: string;
    vendor: string;
    value: number;
    expiry: string;
  }[];
}
interface IProps {
  isDetail?: boolean;
}
const OrderDetail = ({ isDetail }: IProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<IOrderDetail[]>();
  const [isDone, setIsDone] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (id) {
      handleGetOrderDetail();
    }
  }, []);
  const handleGetOrderDetail = async () => {
    try {
      let response: any;
      if (isDetail) {
        response = await requestGetOrderDetail(id as string);
      } else {
        response = await requestGetOrderInfo(id as string);
      }
      if (response?.status === HTTP_STATUS.OK) {
        setIsSuccess(true);
        setData(response?.data);
        setTimeout(() => {
          setIsDone(true);
        }, 1800);
      } else {
        setIsSuccess(false);
        setTimeout(() => {
          setIsDone(true);
        }, 1800);
      }
    } catch (e) {
      setIsSuccess(false);
      setTimeout(() => {
        setIsDone(true);
      }, 1800);
      console.log(e);
    }
  };
  const onCopy = (text: any) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text ? text : "");
    }
  };

  return (
    <>
      {!isDone && !isDetail ? (
        <>
          {isSuccess === true ? (
            <ResultTransaction isSuccess />
          ) : isSuccess === false ? (
            <ResultTransaction />
          ) : null}
        </>
      ) : (
        <div className="flex flex-col  w-full gap-4 items-center justify-center">
          {data &&
            data?.length > 0 &&
            data?.map((c, index) => (
              <div className="w-full border border-dashed border-gray-700 px-4 py-6">
                <p className="mb-2">
                  <span className="font-bold">{c?.cardName}</span>:{" "}
                  {c?.cards?.length} {t("CARD")}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {c?.cards?.map((e, index) => (
                    <div className="relative flex flex-col shadow-xl border border-gray-300 px-4 py-4 rounded-md w-full sm:w-[calc((100%-8px)/2)] lg:w-[calc((100%-16px)/3)] xl:w-[calc((100%-24px)/4)] items-start">
                      <div className="absolute -top-2 -left-2 border rounded-full bg-blue-800 w-7 h-7 flex items-center justify-center text-white font-bold">
                        {index < 10 ? `0${index + 1}` : index + 1}
                      </div>
                      <p>
                        Code: <span className="font-bold">{e?.code}</span>{" "}
                        <CopyToClipboard
                          text={e?.code}
                          onCopy={() => onCopy(e?.code)}
                        >
                          <Tooltip title="Copy">
                            <IconButton>
                              <Iconify
                                icon={"eva:copy-fill"}
                                width={20}
                                height={20}
                              />
                            </IconButton>
                          </Tooltip>
                        </CopyToClipboard>
                      </p>
                      <p>
                        Serial: <span className="font-bold">{e?.serial}</span>
                        <CopyToClipboard
                          text={e?.code}
                          onCopy={() => onCopy(e?.serial)}
                        >
                          <Tooltip title="Copy">
                            <IconButton>
                              <Iconify
                                icon={"eva:copy-fill"}
                                width={20}
                                height={20}
                              />
                            </IconButton>
                          </Tooltip>
                        </CopyToClipboard>
                      </p>
                      <p>
                        Vendor: <span className="font-bold">{e?.vendor}</span>
                        <CopyToClipboard
                          text={e?.code}
                          onCopy={() => onCopy(e?.vendor)}
                        >
                          <Tooltip title="Copy">
                            <IconButton>
                              <Iconify
                                icon={"eva:copy-fill"}
                                width={20}
                                height={20}
                              />
                            </IconButton>
                          </Tooltip>
                        </CopyToClipboard>
                      </p>
                      <p className="mt-1">
                        Value:{" "}
                        <span className="font-bold">
                          {e?.value?.toLocaleString("en-US")}
                        </span>
                      </p>
                      <p className="mt-2">
                        Expiry: <span className="font-bold">{e?.expiry}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default OrderDetail;
