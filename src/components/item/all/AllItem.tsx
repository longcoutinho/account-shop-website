import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {Item} from "@/interfaces/response";
import {getAllItem} from "@/services/item";
import {Backend, Frontend, HTTP_STATUS} from "@/constants";
import {redirectUrl} from "@/constants/FnCommon";
import {useRouter} from "next/router";

export default function AllItem(props: any) {
    const [listItems, setListItems] = useState<Item[]>([]);
    const router = useRouter();
    useEffect(() => {
        if (props.searchTypeId !== undefined && props.searchTypeName !== undefined) {
            renderListItem();
        }
    }, [props.searchTypeId, props.searchTypeName])

    const renderListItem = () => {
        getAllItem(props.searchTypeId, props.searchTypeName).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItems(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    const goDetailItem = (id: any) => {
        redirectUrl(router, Frontend.DETAIL_ITEM_PAGE, {id: id})
    }

    return (
        <Box className="flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5">
            {
                listItems.map((item, index) => (
                    <Box className="w-[calc(25%-2rem)] min-w-40 flex flex-row items-center border-2 border-blue-500 p-2 rounded-sm" key={index}>
                        <Box className="w-1/3 h-full">
                            <img className="h-52 object-cover" src={Backend.IMAGE_SERVICE + '/' + item.listImageIds[0].toString()}/>
                        </Box>
                        <Box className="w-2/3 h-full p-2 flex flex-col items-center justify-between">
                            <p className="text-blue-500 font-bold text-center text-xl">{item.name}</p>
                            <p className="text-black text-center text-bold mt-2">Đơn giá: {item.price} đ</p>
                            <Button variant="outlined" className="w-1/2 mt-2" onClick={() => goDetailItem(item.id)}>Mua</Button>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    );
}

