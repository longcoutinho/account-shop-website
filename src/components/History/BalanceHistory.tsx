import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IBalanceHistory } from "@/interfaces/response";
import { HTTP_STATUS } from "@/constants";
import { formatDateTime } from "@/constants/FnCommon";
import { getBalanceHistory } from "@/services/topup";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export default function BalanceHistory() {
  const [listRequestTopUp, setListRequestTopUp] = useState<IBalanceHistory[]>(
    []
  );
  const pageSize = 15;
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    renderListTopUpRequest();
  }, []);

  const renderListTopUpRequest = async () => {
    await getBalanceHistory()
      .then((res) => {
        console.log(res);
        if (res.status == HTTP_STATUS.OK) {
          setListRequestTopUp(res.data);
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
              <TableCell>Nội dung</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Số dư</TableCell>
              <TableCell>Thời gian</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRequestTopUp
              ?.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
              .map((request, index) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {request.actType === 1
                      ? "Mua hàng"
                      : request.actType === 2
                      ? "Điều chỉnh số dư"
                      : request.actType === 3
                      ? "Top up"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {(request?.balanceAfter - request?.balanceBefore > 0
                      ? "+"
                      : "-") +
                      (
                        request?.balanceAfter - request?.balanceBefore || 0
                      )?.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell>
                    {request?.balanceAfter?.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell>{formatDateTime(request.createDate)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {listRequestTopUp?.length > pageSize && (
        <Pagination
          count={Math.ceil(listRequestTopUp?.length / pageSize)}
          page={page}
          onChange={handleChange}
          className="custom-pagination"
        />
      )}
    </Box>
  );
}
