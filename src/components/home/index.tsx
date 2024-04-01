import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import {
  BackHandTwoTone,
  CreditCardTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
import Link from "next/link";
import ListGames from "./ListGame";
import ListCards from "./ListCard";

export default function HomePage() {
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <div className="flex shadow-xl rounded w-fit mt-4 mx-auto">
        <Link
          href={PageURL.BUY_CARD}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <ShoppingCartTwoTone color="warning" fontSize="large" />
          <p>Mua thẻ nạp</p>
        </Link>
        <Link
          href={PageURL.RECHARGE}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <BackHandTwoTone color="primary" fontSize="large" />
          <p>Nạp thủ công</p>
        </Link>
        <Link
          href={PageURL.RECHARGE_AUTO}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <CreditCardTwoTone color="success" fontSize="large" />
          <p>Nạp tự động</p>
        </Link>
      </div>
      <ListGames />
      <ListCards />
    </Page>
  );
}
