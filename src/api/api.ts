import axios from "axios";
import { getUTC } from "../utils/UTC";
import {
  setItemList,
  getFullInfoList,
  setTotalCount,
} from "../reducers/reducer";
import { AppDispatch } from "../store/store";
import { Item, ParamsActionType } from "../types/types";
var md5 = require("md5");

const instance = axios.create({
  baseURL: "http://api.valantis.store:40000/",
  headers: {
    "X-Auth": md5(`Valantis_${getUTC()}`),
  },
});

export const userAPI = {
    //получаем список ID
  async getItemListApi(dispatch: AppDispatch, param: ParamsActionType) {
    try {
      const response = await instance.post("", param);
      const data: string[] = response.data.result;
      dispatch(setItemList(data));
      return data;
    } catch (error: any) {
      this.getItemListApi(dispatch, param);
      console.log(error);
    }
  },
  //получаем список cо всеми полями 
  async getFullInfoListApi(itemList: string[], dispatch: AppDispatch) {
    try {
      const response = await instance.post("", {
        action: "get_items",
        params: { ids: [...itemList] },
      });
      const data: Item[] = response.data.result;
      dispatch(getFullInfoList(data));
    } catch (error: any) {
      this.getFullInfoListApi(itemList, dispatch);
      console.log(error);
    }
  },
  //получаем количество записей
  async getTC(dispatch: AppDispatch, TCparans: ParamsActionType) {
    try {
      const response = await instance.post("", TCparans);
      const data = response.data.result;
      dispatch(setTotalCount(data.length));
    } catch (error: any) {
      this.getTC(dispatch, TCparans);
      console.log(error);
    }
  },
};
