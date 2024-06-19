import { ItemProductMock } from "./mock";
import CardProduct from "./CardProduct";
export interface IProductRes {
  id: string | number;
  image: string;
  des: string;
  title: string;
}

const Products = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mg:grid-cols-4 xl:grid-cols-5 gap-x-2 sm:gap-x-3 mg:gap-x-4 pt-4 gap-y-16">
      {ItemProductMock &&
        ItemProductMock?.map((e: IProductRes) => (
          <CardProduct item={e} key={e?.id} />
        ))}
    </div>
  );
};
export default Products;
