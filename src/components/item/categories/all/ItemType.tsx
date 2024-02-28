import {HTTP_STATUS} from "@/constants";
import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {faPlus, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ItemType} from "@/interfaces/request";
import {getItemTypeByLevelAndParentId} from "@/services/item";
import AddItemType from "@/components/item/categories/add/AddItemType";
import EditItemType from "@/components/item/categories/edit/EditItemType";
import RemoveItemType from "@/components/item/categories/remove/RemoveItemType";

export default function ItemTypeComponent(props: any) {
    const [listItem, setListItem] = useState<ItemType[]>([]);

    const renderListItem = () => {
        getItemTypeByLevelAndParentId(props.level, props.parentId).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItem(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Box>
            <Box className="item-type-page-content">
                <p className="item-type-title">Type Level {props.level}</p>
                    {
                        (props.level == 2 && (props.parentId == undefined || null))
                        ? <p className="py-2 px-5">Choose an item type level 1</p> :
                            <Box className="item-type-content-wrapper py-2 px-5">
                                {
                                    listItem.map((itemType, index) => (
                                        <Box className="item-type-level-container flex flex-row items-center"
                                             key={index}>
                                            <p style={{color: 'black'}}>{itemType.name}</p>
                                        </Box>
                                    ))
                                }
                            </Box>
                    }
            </Box>
        </Box>
    );
}
