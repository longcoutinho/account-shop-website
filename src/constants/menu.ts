import {
  faCartShopping,
  faHouse,
  faCreditCard,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { PageURL } from ".";

export const menuBar = [
  {
    title: "HOME",
    icon: faHouse,
    url: PageURL.HOME,
  },
  {
    title: "PRODUCT",
    icon: faHand,
    url: PageURL.CASTLE_CLASH,
  },
  {
    title: "GAME_CARD",
    icon: faCartShopping,
    url: PageURL.BUY_CARD,
  },
  {
    title: "GAME_TOP_UP",
    icon: faCreditCard,
    // url: PageURL.GAME_TOP_UP,
    child: [
      {
        title: "Lords mobile",
        url: PageURL.LORDS_MOBILE,
      },
      {
        title: "Castle clash",
        url: PageURL.CASTLE_CLASH,
      },
    ],
  },
];
