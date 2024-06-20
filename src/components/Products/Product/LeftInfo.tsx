import { ItemProductMock } from "@/components/Products/mock";
import Image from "next/image";

const LeftInfo = () => {
  const item = ItemProductMock[0];

  return (
    <div className=" w-1/2 border rounded-2xl shadow-md h-fit flex flex-col p-6 gap-2">
      <div className=" flex gap-6">
        <Image
          src={item?.image}
          alt=""
          width={80}
          height={80}
          className="rounded-2xl"
        />
        <div>
          <p>{item.des}</p>
          <p className="text-lg font-semibold">{item.title}</p>
        </div>
      </div>
      {item?.detail && (
        <div dangerouslySetInnerHTML={{ __html: item?.detail }}></div>
      )}
    </div>
  );
};
export default LeftInfo;
