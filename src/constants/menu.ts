import {
  faCartShopping,
  faHouse,
  faCreditCard,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { PageURL } from ".";

export const menuBar = [
  {
    title: "Home",
    icon: faHouse,
    url: PageURL.HOME,
  },
  {
    title: "Game Card",
    icon: faCartShopping,
    url: PageURL.BUY_CARD,
  },
  {
    title: "Lords mobile",
    icon: faHand,
    url: PageURL.LORDS_MOBILE,
  },
  {
    title: "Castle clash",
    icon: faCreditCard,
    url: PageURL.CASTLE_CLASH,
  },
  // {
  //   title: "Liên hệ",
  //   icon: faContactBook,
  // },
];
