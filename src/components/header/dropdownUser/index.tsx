import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { History, Logout, Person } from "@mui/icons-material";
import { useRouter } from "next/router";
import { PageURL } from "@/constants";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("common");
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
          {t("ACCOUNT_DETAIL")}
        </MenuItem>
        <MenuItem onClick={() => router.push(PageURL.HISTORY)}>
          <History fontSize="small" className="mr-2" />
          {t("TRANSACTION_HISTORY")}
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Logout fontSize="small" className="mr-2" />
          {t("LOG_OUT")}
        </MenuItem>
      </Menu>
    </div>
  );
}
