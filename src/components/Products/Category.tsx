import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface IProps {
  type?: number;
  setType: (e: number) => void;
}
const Category = ({ setType, type }: IProps) => {
  const { category } = useSelector((state: RootState) => state.typeProduct);
  const all = [{ id: 0, name: "All" }];
  return (
    <div className="flex gap-x-2 sm:gap-x-3 mg:gap-x-4 pt-4 gap-y-16 mb-6">
      {category &&
        [...all, ...category]?.map((e) => (
          <p
            key={e?.id}
            onClick={() => setType(e?.id)}
            className={` border cursor-pointer rounded-xl px-4 py-2 ${
              type === e?.id
                ? " border-orange-300 text-orange-500"
                : "border-gray-300 text-black"
            }`}
          >
            {e?.name}
          </p>
        ))}
    </div>
  );
};
export default Category;
