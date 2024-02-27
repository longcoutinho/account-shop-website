import {faCartShopping, faCoins} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            title: "Mua",
            icon: faCartShopping,
            child: [
                {
                    title: "categories",
                    url: "/item/categories"
                },
                {
                    title: "all products",
                    url: "/item/all"
                },
                {
                    title: "add product",
                    url: "/item/add"
                }
            ]
        },
        {
            title: "Nap tien",
            icon: faCoins,
            child: [
                {
                    title: "categories",
                    url: "/item/categories"
                },
                {
                    title: "all products",
                    url: "/item/all"
                },
                {
                    title: "add product",
                    url: "/item/add"
                }
            ]
        },

    ];
