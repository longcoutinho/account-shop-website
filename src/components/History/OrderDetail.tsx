import React, { useEffect, useState } from "react";
import { requestGetOrderInfo } from "@/services/rechargeGameCard";
import { useRouter } from "next/router";
import { HTTP_STATUS } from "@/constants";
import { formatDateTime } from "@/constants/FnCommon";
import CopyToClipboard from "react-copy-to-clipboard";
import { IconButton, Tooltip } from "@mui/material";
import Iconify from "../Iconify";

interface IOrderDetail {
  code: string;
  serial: string;
  vendor: string;
  value: number;
  expiry: string;
}
const OrderDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<IOrderDetail[]>();

  useEffect(() => {
    if (id) {
      handleGetOrderDetail();
    }
  }, []);
  const handleGetOrderDetail = async () => {
    try {
      const response = await requestGetOrderInfo(id as string);
      if (response?.status === HTTP_STATUS.OK) {
        setData(response?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onCopy = (text: any) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text ? text : "");
    }
  };
  return (
    <div className="flex flex-wrap w-full gap-4 items-center justify-center">
      {data &&
        data?.length > 0 &&
        data?.map((e, index) => (
          <div className="flex flex-col border px-4 py-6 rounded-md gap-4 w-[calc((100%-32px)/3)] items-center">
            <p>
              Code: <span className="font-bold">{e?.code}</span>{" "}
              <CopyToClipboard text={e?.code} onCopy={() => onCopy(e?.code)}>
                <Tooltip title="Copy">
                  <IconButton>
                    <Iconify icon={"eva:copy-fill"} width={20} height={20} />
                  </IconButton>
                </Tooltip>
              </CopyToClipboard>
            </p>
            <p>
              Serial: <span className="font-bold">{e?.serial}</span>
              <CopyToClipboard text={e?.code} onCopy={() => onCopy(e?.serial)}>
                <Tooltip title="Copy">
                  <IconButton>
                    <Iconify icon={"eva:copy-fill"} width={20} height={20} />
                  </IconButton>
                </Tooltip>
              </CopyToClipboard>
            </p>
            <p>
              Vendor: <span className="font-bold">{e?.vendor}</span>
              <CopyToClipboard text={e?.code} onCopy={() => onCopy(e?.vendor)}>
                <Tooltip title="Copy">
                  <IconButton>
                    <Iconify icon={"eva:copy-fill"} width={20} height={20} />
                  </IconButton>
                </Tooltip>
              </CopyToClipboard>
            </p>
            <p>
              Value:{" "}
              <span className="font-bold">
                {e?.value?.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              Expiry:{" "}
              <span className="font-bold">{formatDateTime(e?.expiry)}</span>
            </p>
          </div>
        ))}
    </div>
  );
};
export default OrderDetail;
