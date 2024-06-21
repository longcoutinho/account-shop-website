import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IProductRes } from "@/interfaces/response/product";

interface IProps {
  type?: number;
}

const Products = ({ type }: IProps) => {
  const { product } = useSelector((state: RootState) => state.product);

  return (
    <>
      {product &&
      product?.filter((i) => (type ? i.typeId === type : i))?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 mg:grid-cols-4 xl:grid-cols-5 gap-x-2 sm:gap-x-3 mg:gap-x-4 pt-4 gap-y-16">
          {product
            ?.filter((i) => (type ? i.typeId === type : i))
            ?.map((e: IProductRes) => (
              <CardProduct item={e} key={e?.id} />
            ))}
        </div>
      ) : (
        <p className="text-center w-full mt-10 text-2xl ">No data</p>
      )}
    </>
  );
};
export default Products;
