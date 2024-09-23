import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Backend, PageURL } from "@/constants";
import CopyToClipboard from "react-copy-to-clipboard";
import { Box, Button, Chip, IconButton, Tooltip } from "@mui/material";
import Iconify from "../Iconify";
import { useTranslation } from "next-i18next";
import { ArrowBack } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchListProductOder } from "@/redux/slices/product";
import { STATUS_ORDER } from "@/constants/order";

const ProductOrderDetail = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;
  const { productOrder, loading } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      renderListSaleOrder();
    }
  }, [id]);

  const renderListSaleOrder = async () => {
    try {
      dispatch(
        fetchListProductOder({
          page: 0,
          pageSize: 9999,
          transId: id as string,
        })
      );
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
    <>
      {loading ? null : (
        <div className="flex flex-col  w-full gap-4 items-center justify-center">
          <div className="w-full flex justify-between items-center">
            <div
              onClick={() => router.push(PageURL.HISTORY)}
              className="flex gap-2 cursor-pointer"
            >
              <ArrowBack />
              <p className="hover:underline">Back</p>
            </div>
            <Button
              onClick={() => {
                router.push(PageURL.PRODUCTS);
              }}
              className={`!w-[200px] !bg-[#052d75] !text-white !min-h-11 cursor-pointer !hover:bg-[#30466b] !capitalize`}
            >
              {t("CONTINUE_SHOPPING")}
            </Button>
          </div>
          {productOrder &&
            productOrder?.count &&
            productOrder?.count > 0 &&
            productOrder?.listData?.map((c) => (
              <div
                key={c?.id}
                className="w-full border border-dashed border-gray-700 px-4 py-6 flex gap-6 items-center justify-center flex-col"
              >
                {c && c?.imageList && c?.imageList?.length > 0 && (
                  <Box
                    component="img"
                    src={Backend.BASE_URL + c?.imageList[0]}
                    alt={`Preview`}
                    sx={{
                      width: 200,
                      height: 200,
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                  />
                )}
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="text-gray-500 text-sm">{t("ID")}:</span>{" "}
                    {c?.id}{" "}
                    <CopyToClipboard text={c?.id} onCopy={() => onCopy(c?.id)}>
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
                    <span className="text-gray-500 text-sm">
                      {t("PRODUCT")}:
                    </span>{" "}
                    {c?.productName}
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm">
                      {t("CATEGORY")}:
                    </span>{" "}
                    {c?.categoriesName}
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm">
                      {t("ADDRESS")}:
                    </span>{" "}
                    {c?.address}
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm">
                      {t("CREATED_DATE")}:
                    </span>{" "}
                    {c?.createDate}
                  </p>
                  <p>
                    {c?.status === STATUS_ORDER.SUCCESS ? (
                      <Chip
                        label={t("SUCCESS")}
                        color="success"
                        variant="outlined"
                      />
                    ) : c?.status === STATUS_ORDER.FAILED ? (
                      <Chip
                        label={t("FAILED")}
                        color="error"
                        variant="outlined"
                      />
                    ) : c?.status === STATUS_ORDER.RECEIVED ? (
                      <Chip
                        label={t("RECEIVED")}
                        color="secondary"
                        variant="outlined"
                      />
                    ) : c?.status === STATUS_ORDER.PROCESSING ? (
                      <Chip
                        label={t("PREPARING")}
                        color="info"
                        variant="outlined"
                      />
                    ) : c?.status === STATUS_ORDER.TRANSPORT ? (
                      <Chip
                        label={t("DELIVERING")}
                        color="primary"
                        variant="outlined"
                      />
                    ) : (
                      <Chip
                        label={t("CONFIRMING")}
                        color="warning"
                        variant="outlined"
                      />
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default ProductOrderDetail;
