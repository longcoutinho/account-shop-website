import {PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useState} from "react";
import ItemTypeComponent from "@/components/item/categories/all/ItemType";
import AllItem from "@/components/item/all/AllItem";
import {Box, Button, TextField} from "@mui/material";

export default function BuyComponent() {
    const [typeId, setTypeId] = useState(null);
    const [typeName, setTypeName] = useState('');
    const [searchTypeId, setSearchTypeId] = useState(null);
    const [searchTypeName, setSearchTypeName] = useState('');

    const changeTypeId = (typeId: any) => {
        setTypeId(typeId);
    }

    const searchItem = () => {
        console.log(typeId);
        console.log(typeName);
        setSearchTypeId(typeId);
        setSearchTypeName(typeName);
        console.log('kk');
    }

    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box className="p-5 flex flex-col gap-5">
                <Box className="flex flex-row items-center bg-white rounded-2xl p-5 box-shadow flex-wrap gap-3">
                    <Box className="w-[calc(50%-2rem)]">
                        <ItemTypeComponent changeTypeId={changeTypeId}></ItemTypeComponent>
                    </Box>
                    <Box className="w-[calc(50%-2rem)]">
                        <TextField size="small" type="small" className="w-full" label="Tên sản phẩm" onChange={(e: any) => setTypeName(e.target.value)}></TextField>
                    </Box>
                    <Box className="w-full flex flex-row items-center">
                        <Button variant="outlined" className="w-1/10" onClick={() => searchItem()}>Tìm kiếm</Button>
                    </Box>
                </Box>
                <AllItem searchTypeId={searchTypeId} searchTypeName={searchTypeName}></AllItem>
            </Box>
        </Page>
    );
}