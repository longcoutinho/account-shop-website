import { Box, Button, Chip, Pagination, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PageURL } from "@/constants";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Visibility } from "@mui/icons-material";
import { PATH_PAGE } from "@/routes/path";
import { STATUS_ORDER } from "@/constants/order";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchListProductOder } from "@/redux/slices/product";
import { isUndefined } from "lodash";

export default function ProductOrders() {
  const pageSize = 15;
  const { t } = useTranslation("common");
  const router = useRouter();
  const { productOrder, loading } = useSelector(
    (state: RootState) => state.product
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    renderListSaleOrder();
  }, [page]);

  const renderListSaleOrder = async () => {
    try {
      dispatch(fetchListProductOder({ page: page - 1, pageSize: pageSize }));
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleClickDetail = (id: string) => {
    router.push(PATH_PAGE.history.product + `/${id}`);
  };

  return (
    <Box className="flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
      {loading ? (
        <Skeleton
          variant="rounded"
          width={1700}
          height={200}
          animation="wave"
        />
      ) : (
        <>
          {productOrder &&
          productOrder?.listData &&
          productOrder?.listData?.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t("TRANSACTION_CODE")}</TableCell>
                    <TableCell>{t("PRODUCT")}</TableCell>
                    <TableCell>{t("CREATED_AT")}</TableCell>
                    <TableCell>{t("STATUS")}</TableCell>
                    <TableCell>{t("ACTION")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productOrder?.listData?.map((request, index) => (
                    <TableRow
                      sx={{
                        cursor:
                          request.status !== STATUS_ORDER.FAILED
                            ? "pointer"
                            : "default",
                      }}
                      onClick={() => {
                        if (request.status !== STATUS_ORDER.FAILED) {
                          handleClickDetail(request.id);
                        }
                      }}
                    >
                      <TableCell>{request.id}</TableCell>
                      <TableCell>
                        {/* {request.price.toLocaleString("vi-VN")}{" "}
                        {request?.currency} */}
                        {request?.productName}
                      </TableCell>
                      <TableCell>{request.createDate}</TableCell>
                      <TableCell>
                        {request.status === STATUS_ORDER.SUCCESS ? (
                          <Chip
                            label={t("SUCCESS")}
                            color="success"
                            variant="outlined"
                          />
                        ) : request.status === STATUS_ORDER.FAILED ? (
                          <Chip
                            label={t("FAILED")}
                            color="error"
                            variant="outlined"
                          />
                        ) : request.status === STATUS_ORDER.RECEIVED ? (
                          <Chip
                            label={t("RECEIVED")}
                            color="secondary"
                            variant="outlined"
                          />
                        ) : request.status === STATUS_ORDER.PROCESSING ? (
                          <Chip
                            label={t("PREPARING")}
                            color="info"
                            variant="outlined"
                          />
                        ) : request.status === STATUS_ORDER.TRANSPORT ? (
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
                      </TableCell>
                      <TableCell>
                        {request.status !== STATUS_ORDER.FAILED && (
                          <Visibility />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div className="w-full flex flex-col">
              <div className="mx-auto text-xl md:text-4xl font-bold px-0 md:px-20 py-32 w-fit mt-6">
                {t("HAVENT_MADE_TRANSACTION")}
              </div>
              <Button
                onClick={() => {
                  router.push(PageURL.PRODUCTS);
                }}
                className={`!w-[200px] !bg-[#052d75] !text-white !min-h-11 !mt-4 !mx-auto !cursor-pointer !hover:bg-[#30466b] !capitalize`}
              >
                {t("START_SHOPPING")}
              </Button>
            </div>
          )}
          {productOrder &&
            !isUndefined(productOrder?.count) &&
            productOrder?.count > pageSize && (
              <Pagination
                count={Math.ceil(productOrder?.count / pageSize)}
                page={page}
                onChange={handleChange}
                className="custom-pagination"
              />
            )}
        </>
      )}
    </Box>
  );
}
