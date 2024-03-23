import { deleteUserInfo } from "@/constants/FnCommon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Logout, Person } from "@mui/icons-material";

interface IProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleLogout: () => void;
}

export default function DropDownUser({
  open,
  anchorEl,
  handleClose,
  handleLogout,
}: IProps) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Person fontSize="small" className="mr-2" />
          Thông tin tài khoản
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Logout fontSize="small" className="mr-2" />
          Đăng xuất
        </MenuItem>
      </Menu>
    </div>
  );
}
