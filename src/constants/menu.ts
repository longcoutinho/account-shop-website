import {faCartShopping, faCoins, faHistory, faContactBook} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            title: "Mua",
            icon: faCartShopping,
            child: [
                {
                    title: "Danh sách sản phẩm",
                    url: "/buy"
                },
            ]
        },
        {
            title: "Tài khoản",
            icon: faCoins,
            child: [
                {
                    title: "Nạp tiền",
                    url: "/topup"
                },
            ]
        },
        {
            title: "Lịch sử",
            icon: faHistory,
            child: [
                {
                    title: "Đơn hàng đã mua",
                    url: "/sale-order/list"
                },
                {
                    title: "Yêu cầu nạp tiền",
                    url: "/topup/list"
                },
            ]
        },
        {
            title: "Liên hệ",
            icon: faContactBook,
            child: [
                {
                    title: "Thông tin liên hệ",
                    url: "/topup"
                },
            ]
        },

    ];
