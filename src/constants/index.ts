import { PATH_PAGE } from "@/routes/path";

export enum Backend {
  BASE_URL = "https://elitagame.online",
  // BASE_URL = "http://183.80.22.21:8989",
  // BASE_URL = 'http://localhost:8989',
  USER_SERVICE = BASE_URL + "/user",
  GAME_SERVICE = BASE_URL + "/game",
  CARD_SERVICE = BASE_URL + "/card",
  ITEM_SERVICE = BASE_URL + "/item",
  IMAGE_SERVICE = BASE_URL + "/image",
  TOPUP_SERVICE = BASE_URL + "/top-up",
  SALE_ORDER_SERVICE = BASE_URL + "/sale-order",
}

export enum Frontend {
  // BASE_URL = "http://58.187.231.220:3000",
  BASE_URL = "http://localhost:3000",
  ADD_ITEM_PAGE = BASE_URL + "/item/add",
  EDIT_ITEM_PAGE = BASE_URL + "/item/edit",
  DETAIL_ITEM_PAGE = BASE_URL + "/buy/item",
  LIST_TOP_UP_PAGE = BASE_URL + "/topup/list",
}
export enum HTTP_STATUS {
  OK = 200,
  UNAUTH = 401,
}
export enum PAGE_TITLE {
  PREFIX = "",
  HOME = "Home",
  LAPLA = "Lap la so phong thuy",
  ALL_PRODUCTS = "All Products",
  EDIT_ITEM = "Edit Item",
  RECHARGE = "Nạp thẻ thủ công",
  RECHARGE_AUTO = "Nạp thẻ tự động",
  BUY_CARD = "Game Card",
  PAYMENT = "PAYMENT",
  HISTORY = "TRANSACTION_HISTORY",
  LORDS_MOBILE = "Lords mobile",
  CASTLE_CLASH = "Castle clash",
  ORDER = "Order",
  PRODUCTS = "Products",
  ELITA_SHOP = "ELITA_SHOP",
}

export const HomePage = {
  numTopPosts: 5,
  numBotPosts: 5,
  numHotPosts: 5,
  numItem: 4,
  optionTopPosts: {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      690: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 1,
      },
      1300: {
        slidesPerView: 1,
      },
      1600: {
        slidesPerView: 1,
      },
      1900: {
        slidesPerView: 1,
      },
    },
  },
};

export const ServiceType = {
  POSTS: 0,
  ITEM: 1,
};

export enum URL {
  BASE_URL = "",
  POSTS_SERVICE = "/posts",
  ITEM_SERVICE = "/item",
}
export enum PostsService {
  getPost = "/posts",
  SAVE = "",
  getPostDetail = "/posts/detail",
}

export enum TypeService {
  getType = "/type/",
  SAVE = "",
  DETAIL = "/detail",
}

export enum ItemService {
  getItems = "/item",
  DETAIL = "/detail",
  getItemDetail = "/item/detail",
}

export const HOME_PAGE_DISPLAY_ITEM = 3;

export enum PageURL {
  HOME = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  PROFILE = "/profile",
  BUY = "/buy",
  POST = "/post",
  RECHARGE = "/recharge",
  RECHARGE_AUTO = "/recharge-auto",
  BUY_CARD = "/buy-card",
  PAYMENT = "/payment",
  HISTORY = "/history",
  GAME_TOP_UP = "/game-topup",
  CASTLE_CLASH = "/castle-clash",
  LORDS_MOBILE = "/lords-mobile",
  PRODUCTS = "/products",
  PRODUCT = "/product",
}

export const MenuTitle: any = [
  {
    title: "Home",
    redirect_link: PATH_PAGE.user.tab1,
    drop_down: false,
  },
  {
    title: "Blog",
    redirect_link: PATH_PAGE.user.tab2,
    drop_down: true,
  },
  {
    title: "Collection",
    redirect_link: PATH_PAGE.user.tab3,
    drop_down: false,
  },
  {
    title: "Contact",
    redirect_link: PATH_PAGE.user.tab4,
    drop_down: false,
  },
  {
    title: "About Us",
    redirect_link: PATH_PAGE.user.tab5,
    drop_down: false,
  },
];

export enum LOCALSTORAGE_KEY {
  SHOPPING_CART = "shopping_cart",
}
