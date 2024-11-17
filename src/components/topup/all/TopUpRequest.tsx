import { Box, Chip, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TopUpRequest } from "@/interfaces/response";
import { HTTP_STATUS } from "@/constants";
import { formatDateTime } from "@/constants/FnCommon";
import { getAllTopUpRequest } from "@/services/topup";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export default function AllTopUpRequest() {
  const [listRequestTopUp, setListRequestTopUp] = useState<TopUpRequest[]>([]);
  const pageSize = 15;
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    renderListTopUpRequest();
  }, []);

  const renderListTopUpRequest = () => {
    getAllTopUpRequest()
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          setListRequestTopUp(res.data.listTopUp);
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
              <TableCell>Số lượng</TableCell>
              <TableCell>Thời gian</TableCell>
              <TableCell>Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRequestTopUp
              ?.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
              .map((request, index) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>
                    {request?.amount?.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell>{formatDateTime(request.createDate)}</TableCell>
                  <TableCell>
                    {request.status === "SUCCESS" ? (
                      <Chip
                        label="Thành công"
                        color="success"
                        variant="outlined"
                      />
                    ) : request.status === "FAILED" ? (
                      <Chip label="Thất bại" color="error" variant="outlined" />
                    ) : (
                      <Chip
                        label="Đang tiến hành"
                        color="warning"
                        variant="outlined"
                      />
                    )}
                  </TableCell>
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
