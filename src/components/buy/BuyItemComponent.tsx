import {Box, Button, TextField} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {ItemType} from "@/interfaces/request";
import {HTTP_STATUS} from "@/constants";
import {getUserInfo} from "@/constants/FnCommon";

export default function BuyItemComponent(props: any) {
    const [afterBalance, setAfterBalance] = useState('');
    useEffect(() => {
        const user = getUserInfo();
        if (user !== null) {
            const res = Number(user.balance) - props.price;
            setAfterBalance(res.toString());
        }
    }, [])
    return (
        <Box sx={{display: props.open ? 'block' :'none'}}>
            <Box className="overlay-container"></Box>
            <Box className="center-box">
                <Box>
                    <p className="text-4xl font-bold text-blue-500">Mua {props.amount} sản phẩm {props.name}</p>
                </Box>
                <Box className="mt-5 ml-20">
                    <p className="text-2xl">Đơn giá: {props.price}đ</p>
                    <p className="text-2xl">Số dư còn lại: {afterBalance}đ</p>
                </Box>
                <Box className="center-box-button-container">
                    <Button variant="outlined" color="success">Xác nhận</Button>
                    <Button onClick={() => props.closeBuyComponent()} variant="outlined" color="error">Hủy bỏ</Button>
                </Box>
            </Box>
        </Box>
    );
}
