import {Frontend, HTTP_STATUS, PAGE_TITLE} from "@/constants";
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
import {useRouter} from "next/router";
import {createTopUpRequest, getAllTopUpRequest} from "@/services/topup";
import {redirectUrl} from "@/constants/FnCommon";

export default function TopUpComponent() {
    const [amount, setAmount] = useState<string | undefined>();
    const [method, setMethod] = useState<string | undefined>();
    const router = useRouter();

    const createRequest = () => {
        createTopUpRequest(amount, method).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    redirectUrl(router, Frontend.LIST_TOP_UP_PAGE, null);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box className="bg-white rounded-2xl box-shadow p-5">
                    <TextField
                        className="w-full"
                        id="outlined-select-currency"
                        select
                        label="Phương thức nạp"
                        defaultValue=""
                        onChange={e => setMethod(e.target.value)}
                    >
                        <MenuItem value={1}>Internet Banking</MenuItem>
                        <MenuItem value={2}>MoMo</MenuItem>
                    </TextField>
                <TextField
                    className="w-full"
                    id="outlined-select-currency"
                    label="Số tiền nạp"
                    defaultValue=""
                    onChange={e => setAmount(e.target.value)}
                >
                </TextField>
                <Button onClick={createRequest}>Tạo yêu cầu nạp tiền</Button>
            </Box>
        </Page>
    );
}
