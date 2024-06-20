import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export interface IProductRes {
  id: string | number;
  image: string;
  des: string;
  title: string;
}

const Category = () => {
  const { category } = useSelector((state: RootState) => state.typeProduct);
  return (
    <div className="flex gap-x-2 sm:gap-x-3 mg:gap-x-4 pt-4 gap-y-16 mb-6">
      {category &&
        category?.map((e) => (
          <p className=" border border-gray-300 rounded-xl px-4 py-2">
            {e?.name}
          </p>
        ))}
    </div>
  );
};
export default Category;
