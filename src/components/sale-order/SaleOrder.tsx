import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IOrderHistory } from "@/interfaces/response";
import { HTTP_STATUS, PageURL } from "@/constants";
import { formatDateTime } from "@/constants/FnCommon";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { getAllSaleOrders } from "@/services/sale-order";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function AllSaleOrder() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [listOrderHistory, setOrderHistory] = useState<IOrderHistory[]>([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    renderListSaleOrder();
  }, []);

  const renderListSaleOrder = () => {
    getAllSaleOrders()
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          setOrderHistory(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className="flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
      {listOrderHistory && listOrderHistory?.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t("TRANSACTION_CODE")}</TableCell>
                <TableCell>{t("AMOUNT")}</TableCell>
                <TableCell>{t("CREATED_AT")}</TableCell>
                <TableCell>{t("STATUS")}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {listOrderHistory?.map((request, index) => (
                <TableRow>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>
                    {request.price.toLocaleString("vi-VN")}đ
                  </TableCell>
                  <TableCell>{formatDateTime(request.createDate)}</TableCell>
                  <TableCell>
                    {request.status === 2
                      ? "Thành công"
                      : request.status === 3
                      ? "Thất bại"
                      : "Đang tiến hành"}
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
              router.push(PageURL.BUY_CARD);
            }}
            className={`w-[200px] bg-[#052d75] text-white min-h-11 mt-4 mx-auto cursor-pointer hover:bg-[#30466b] capitalize`}
          >
            {t("START_SHOPPING")}
          </Button>
        </div>
      )}

      {/* <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        className="custom-pagination"
      /> */}
    </Box>
  );
}
