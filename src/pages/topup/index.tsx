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
import {Box, Button, FormControl, MenuItem, TextField} from "@mui/material";

export default function TopUpComponent() {
    const [itemLevel1, setItemLevel1] = useState<number | null>(null);
    const [itemLevel2, setItemLevel2] = useState<number | null>(null);

    const changeParentChooseItemId = (itemId: number, level: number) => {
        if (level == 1) {
            setItemLevel1(itemId);
        }
        else if (level == 2) {
            setItemLevel2(itemId);
        }
    }

    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box className="bg-white rounded-2xl box-shadow p-5">
                    <TextField
                        className="w-full"
                        id="outlined-select-currency"
                        select
                        label="Phương thức nạp"
                        defaultValue="EUR"
                    >
                        <MenuItem value={1}>Internet Banking</MenuItem>
                        <MenuItem value={2}>MoMo</MenuItem>
                    </TextField>
                <TextField
                    className="w-full"
                    id="outlined-select-currency"
                    label="Số tiền nạp"
                    defaultValue="EUR"
                >
                </TextField>
                <Button>Tạo yêu cầu nạp tiền</Button>
            </Box>
        </Page>
    );
}
