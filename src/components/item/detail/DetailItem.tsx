import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {getItemById} from "@/services/item";
import {Backend, HTTP_STATUS} from "@/constants";

export default function DetailItem(props: any) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [listImageIds, setListImageIds] = useState<string[]>([]);
    useEffect(() => {
        if (props.id !== undefined) {
            renderListItem();
        }
    }, [props.id])

    const renderListItem = () => {
        getItemById(props.id).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setName(res.data.name);
                    setPrice(res.data.price);
                    setListImageIds(res.data.listImageIds);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Box className="flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
                    <Box className="w-[calc(25%-2rem)] min-w-40 flex flex-row items-center border-2 border-blue-500 p-2 rounded-sm">
                        <Box className="w-1/3 h-full">
                            <img className="h-52 object-cover" src={Backend.IMAGE_SERVICE + '/' + listImageIds[0].toString()}/>
                        </Box>
                        <Box className="w-2/3 h-full p-2 flex flex-col items-center justify-between">
                            <p className="text-blue-500 font-bold text-center text-xl">{name}</p>
                            <p className="text-black text-center text-bold mt-2">Đơn giá: {price} đ</p>
                            <Button variant="outlined" className="w-1/2 mt-2">Mua </Button>
                        </Box>
                    </Box>
        </Box>
    );
}

