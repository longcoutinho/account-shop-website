import React, { useState } from "react";
import { LANGUAGE } from "@/constants/lang";
import { useRouter } from "next/router";
import Image from "next/image";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const SwitchLanguage = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(router?.locale);

  const handleChange = (event: SelectChangeEvent) => {
    if (typeof window !== "undefined") {
      setLanguage(event.target.value as string);
      const newURL =
        window.location.origin +
        "/" +
        (event.target.value as string) +
        router.pathname;
      window.location.replace(newURL);
    }
  };

  const convertArrayObject = () => {
    const arrayLanguage: { value: string; label: any }[] = [];
    LANGUAGE.map((item: any) => {
      arrayLanguage.push({
        value: item && item?.key.toString().toLowerCase(),
        label: (
          <div className="flex items-center gap-[0.77rem] ">
            <Image
              src={item.image.toString()}
              width={30}
              height={20}
              alt={item.content.toString()}
              className=" rounded-md"
            />
            {item.content}
          </div>
        ),
      });
    });
    return arrayLanguage;
  };

  return (
    <div className="ml-3">
      <Select
        defaultValue={language}
        className=""
        style={{
          width: 150,
          fontSize: "12px",
          padding: 0,
        }}
        onChange={handleChange}
      >
        {convertArrayObject()?.map((e) => (
          <MenuItem value={e.value} className="">
            {e.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SwitchLanguage;
