import {
  faCartShopping,
  faContactBook,
  faHouse,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { PageURL } from ".";
export const menuBar = [
  {
    title: "Trang chủ",
    icon: faHouse,
    url: PageURL.HOME,
  },
  {
    title: "Mua thẻ game",
    icon: faCartShopping,
    url: "",
  },
  {
    title: "Nạp thẻ game",
    icon: faGamepad,
    url: "",
  },
  // {
  //   title: "Lịch sử giao dịch",
  //   icon: faRectangleList,
  //   url: "",
  // },
  // {
  //   title: "Mua",
  //   icon: faCartShopping,
  //   url: "",
  // },
  // {
  //   title: "Tài khoản",
  //   icon: faCoins,
  //   child: [
  //     {
  //       title: "Nạp tiền",
  //       url: "/topup",
  //     },
  //   ],
  // },
  // {
  //   title: "Lịch sử",
  //   icon: faHistory,
  //   child: [
  //     {
  //       title: "Đơn hàng đã mua",
  //       url: "/sale-order/list",
  //     },
  //     {
  //       title: "Yêu cầu nạp tiền",
  //       url: "/topup/list",
  //     },
  //   ],
  // },
  {
    title: "Liên hệ",
    icon: faContactBook,
    // child: [
    //   {
    //     title: "Thông tin liên hệ",
    //     url: "/info",
    //   },
    // ],
  },
];
