import {Box, Button, TextField} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {ItemType, Order} from "@/interfaces/request";
import {Frontend, HTTP_STATUS} from "@/constants";
import {getUserInfo, redirectUrl} from "@/constants/FnCommon";
import {createOrder} from "@/services/sale-order";

export default function BuyItemComponent(props: any) {
    const [afterBalance, setAfterBalance] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const user = getUserInfo();
        if (user !== null) {
            console.log(props.price);
            const res = Number(user.balance) - (props.amount * props.price);
            setAfterBalance(res.toString());
            setUserId(user.id);
        }
    }, [])

    const buyItem = () => {
        const request: Order = {
            amount: props.amount,
            userId: userId,
            itemId: props.itemId
        }
        createOrder(request).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    props.closeBuyComponent();
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Box sx={{display: props.open ? 'block' :'none'}}>
            <Box className="overlay-container"></Box>
            <Box className="center-box">
                <Box>
                    <p className="text-4xl font-bold text-blue-500">Mua {props.amount} sản phẩm {props.name}</p>
                </Box>
                <Box className="mt-5 ml-20">
                    <p className="text-2xl">Đơn giá: {props.amount * props.price}đ</p>
                    {/*<p className="text-2xl">Số dư còn lại: {afterBalance}đ</p>*/}
                </Box>
                <Box className="center-box-button-container">
                    <Button variant="outlined" color="success" onClick={buyItem}>Xác nhận</Button>
                    <Button onClick={() => props.closeBuyComponent()} variant="outlined" color="error">Hủy bỏ</Button>
                </Box>
            </Box>
        </Box>
    );
}
