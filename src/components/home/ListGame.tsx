import { HTTP_STATUS, PageURL } from "@/constants";
import { IGamesRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListGames } from "@/services/rechargeGameCard";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ListGames = () => {
  const { t } = useTranslation("common");
  const [listGames, setListGames] = useState<IGamesRes[]>([]);
  const gameCard = [
    {
      id: 999999999,
      name: t("GAME_CARD"),
      image: "/img/card.jpg",
      router: PageURL.BUY_CARD,
    },
    {
      id: 9999999,
      name: t("ELITA_SHOP"),
      image: "/img/buy_card.png",
      router: PageURL.PRODUCTS,
    },
  ];

  useEffect(() => {
    renderListGames();
  }, []);

  const renderListGames = async () => {
    try {
      const res = await requestGetListGames();
      if (res?.status === HTTP_STATUS.OK) {
        setListGames(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-10">
      {[...gameCard, ...listGames]?.map((g) => (
        <Link
          href={g?.router ? g.router : PageURL.HOME}
          key={g.id}
          className={`  rounded-lg cursor-pointerborder-[#00000038] border-2 hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] 
               hover:border-[#f3a44a] 
            `}
        >
          <Image
            src={g.image ? g.image : "/img/lords_mobile_logo.png"}
            alt="home"
            width={200}
            height={200}
            className={`w-full h-[180px] xl:h-[240px] rounded-t-lg mx-auto 2 ${
              g.id === 9999999 && "object-contain"
            }`}
          />
          <p className="text-center text-xl my-2 hover:text-[#f3a44a]">
            {g.name}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default ListGames;
