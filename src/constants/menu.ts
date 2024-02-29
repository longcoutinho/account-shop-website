import {faCartShopping, faCoins} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            title: "Mua",
            icon: faCartShopping,
            child: [
                {
                    title: "Danh sach san pham",
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
            title: "Lich su",
            icon: faCoins,
            child: [
                {
                    title: "Don hang da mua",
                    url: "/topup"
                },
            ]
        },
        {
            title: "Lien he",
            icon: faCoins,
            child: [
                {
                    title: "Thong tin lien he",
                    url: "/topup"
                },
            ]
        },

    ];
