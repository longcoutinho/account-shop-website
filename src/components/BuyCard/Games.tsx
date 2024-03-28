import { HTTP_STATUS } from "@/constants";
import { IGamesRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListGames } from "@/services/rechargeGameCard";
import { useEffect, useState } from "react";

const SelectGame = () => {
  const [listGames, setListGames] = useState<IGamesRes[]>([]);

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
    <>
      <p>Chọn game</p>
      {listGames?.map((g) => (
        <div key={g.id} className="bg-gray-300 p-3 max-w-36 rounded-lg">
          <p>{g.name}</p>
        </div>
      ))}
    </>
  );
};
export default SelectGame;
