import {Backend} from "@/constants";
import {doGetRequest, doPostRequest} from "@/constants/FnCommon";
import axios, {AxiosPromise} from "axios";

export const signUp = async (request: any) : Promise<any> => {
    const url = Backend.USER_SERVICE + '/register';
    return doPostRequest(url, request);
}

export const signIn = async (request: any) : Promise<any> => {
    const url = Backend.USER_SERVICE + '/login';
    return doPostRequest(url, request);
}

export const getUserBalance = async (id: string) : Promise<any> => {
    const url = Backend.USER_SERVICE + '/' + id;
    return doGetRequest(url, null);
}

export const adjustBalance = async (username: string, amount: number) : Promise<any> => {
    const params = {
        username: username,
        amount: amount
    }
    const url = Backend.USER_SERVICE + '/adjust-balance';
    return doPostRequest(url, params);
}