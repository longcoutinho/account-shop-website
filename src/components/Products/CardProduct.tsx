import Image from "next/image";
import { useRouter } from "next/router";
import { PageURL } from "@/constants";
import { IProductRes } from ".";

interface IProps {
  item: IProductRes;
}
const CardProduct = ({ item }: IProps) => {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(PageURL.PRODUCT + `/${item?.id}`);
  };

  return (
    <div
      onClick={handleViewDetail}
      className="cursor-pointer relative border rounded-2xl shadow-md h-48 mg:h-52 pt-24 mg:pt-32 flex flex-col items-center gap-2 hover:border-orange-300"
    >
      <Image
        src={item.image}
        alt=""
        width={140}
        height={140}
        className="rounded-2xl absolute -top-7 h-28 w-28 mg:h-36 mg:w-36"
      />
      <div>{item.des}</div>
      <div className="text-lg font-semibold">{item.title}</div>
    </div>
  );
};
export default CardProduct;
