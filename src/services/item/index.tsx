import {Backend} from "@/constants";
import {doFileRequest, doGetRequest, doPostRequest} from "@/constants/FnCommon";
import {Item, ItemType} from "@/interfaces/request";

export const createNewItemType = async (request: ItemType) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/create';
    return doPostRequest(url, request);
}

export const editItemType = async (id: number, name: string, code: string) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/edit/' + id.toString();
    const request = {
        name: name,
        code: code
    }
    return doPostRequest(url, request);
}

export const deleteItemType = async (id: number) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/delete/' + id.toString();
    return doPostRequest(url, null);
}

export const getItemTypeByLevelAndParentId = async () : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type';
    // const params = {
    //     level: level,
    //     parentId: parentId
    // }
    return doGetRequest(url, null);
}

export const getItemTypeById = async (id: number) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type';
    const params = {
        id: id,
    }
    return doGetRequest(url, params);
}

export const createNewItem = async (request: FormData) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/create';
    return doFileRequest(url, request);
}

export const getItemById = async (id: string | string[] | undefined) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/' + id;
    return doGetRequest(url, null);
}

export const getAllItem = async (searchTypeId: any, searchTypeName: any, page: number, pageSize: number) : Promise<any> => {
    const url = Backend.ITEM_SERVICE;
    const params = {
        typeId: searchTypeId > 0 ? searchTypeId : null,
        name: searchTypeName,
        page: page,
        pageSize: pageSize,
    }
    return doGetRequest(url, params);
}
