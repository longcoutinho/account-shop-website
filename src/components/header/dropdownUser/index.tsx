import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { Logout, Person } from "@mui/icons-material";
import { useRouter } from "next/router";
import { PageURL } from "@/constants";

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
  const router = useRouter();
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
        <MenuItem onClick={() => router.push(PageURL.PROFILE)}>
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
