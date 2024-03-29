import { Box, Pagination } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon";
import React, { useEffect, useState } from "react";
import { TopUpRequest } from "@/interfaces/response";
import { HTTP_STATUS } from "@/constants";
import { formatDateTime } from "@/constants/FnCommon";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { getAllSaleOrders } from "@/services/sale-order";

export default function AllSaleOrder(props: any) {
  const [listRequestTopUp, setListRequestTopUp] = useState<TopUpRequest[]>([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    renderListTopUpRequest();
  }, []);

  const renderListTopUpRequest = () => {
    getAllSaleOrders()
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          setListRequestTopUp(res.data.listSaleOrder);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className="flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Mã giao dịch</TableCell>
              <TableCell>Tài khoản</TableCell>
              <TableCell>Mật khẩu</TableCell>
              <TableCell>Thời gian mua</TableCell>
              <TableCell>Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRequestTopUp.map((request, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.username}</TableCell>
                <TableCell>{request.password}</TableCell>
                <TableCell>{formatDateTime(request.createDate)}</TableCell>
                <TableCell>
                  {request.status == 0
                    ? "Đang xử lý"
                    : request.status == 1
                    ? "Thành công"
                    : "Thất bại"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        className="custom-pagination"
      />
    </Box>
  );
}
