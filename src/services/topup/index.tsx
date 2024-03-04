import {Backend} from "@/constants";
import {doGetRequest} from "@/constants/FnCommon";

export const getAllTopUpRequest = async () : Promise<any> => {
    const url = Backend.TOPUP_SERVICE + '/list';
    // const params = {
    //     typeId: searchTypeId,
    //     name: searchTypeName
    // }
    return doGetRequest(url, null);
}
