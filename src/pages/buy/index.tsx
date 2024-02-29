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
import {Input, Box, Button, InputLabel, TextField} from "@mui/material";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function BuyComponent() {
    const [typeId, setTypeId] = useState(null);
    const [typeName, setTypeName] = useState('');
    const [searchTypeId, setSearchTypeId] = useState(null);
    const [searchTypeName, setSearchTypeName] = useState('');

    const changeTypeId = (typeId: any) => {
        setTypeId(typeId);
    }

    const searchItem = () => {
        setSearchTypeId(typeId);
        setSearchTypeName(typeName);
    }

    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box className="p-5 flex flex-col gap-10">
                <Box className="flex flex-row items-center bg-white rounded-2xl p-5 box-shadow">
                    <ItemTypeComponent changeTypeId={changeTypeId}></ItemTypeComponent>
                    <Box className="mx-2">
                        <TextField label="Tên sản phẩm" onChange={(e: any) => setTypeName(e.target.value)}></TextField>
                    </Box>
                    <Button color="primary" variant="contained" className="m-2" onClick={searchItem}>Tìm kiếm</Button>
                </Box>
                <AllItem searchTypeId={searchTypeId} searchTypeName={searchTypeName}></AllItem>
            </Box>
        </Page>
    );
}
