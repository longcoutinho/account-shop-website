import { Frontend, HTTP_STATUS, PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import "@/constants/FnCommon";
import React, {useEffect, useState} from "react";
import {Box, Button, CircularProgress, MenuItem, TextField} from "@mui/material";
import { useRouter } from "next/router";
import {createTopUpRequest, getTopUpStatus} from "@/services/topup";
import { redirectUrl } from "@/constants/FnCommon";
import Image from "next/image";
interface IContent {
    text?: string;
    method?: string;
}
export default function TopUpProcess() {
    const router = useRouter();

    useEffect(() => {
        if (router.query.id != null) {
            getTopUpStatus(router.query)
                .then((res) => {
                    if (res.status == HTTP_STATUS.OK) {
                        redirectUrl(router, Frontend.LIST_TOP_UP_PAGE, null);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [router.query.id])

    return (
        <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
            <Box sx={{height: "500px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress />
            </Box>

        </Page>
    );
}
