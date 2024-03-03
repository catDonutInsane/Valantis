import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IS, Item, ParamsActionType } from "../types/types";

const initialState: IS = {
  itemList: [],
  fullInfoList: [],
  isLoading: false,
  totalCount: 0,
  pageSize: 50,
  pagDisable: false,
  param: {
    action: "get_ids",
    params: {
      offset: 0,
      limit: 50,
    },
  },
  paramsToGetTotalCount: {
    action: "get_ids",
    params: {
      offset: 0,
    },
  },
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    setItemList(state, action: PayloadAction<string[]>) {
      state.itemList = action.payload;
    },
    getFullInfoList(state, action: PayloadAction<Item[]>) {
      state.fullInfoList = action.payload.reduce(
        (accumulator: any, current: any) => {
          if (!accumulator.find((item: any) => item.id === current.id)) {
            accumulator.push(current);
          }
          return accumulator;
        },
        []
      );
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },

    setParams(state, action: PayloadAction<ParamsActionType>) {
      state.param = action.payload;
    },
    setparamsToGetTotalCount(state, action: PayloadAction<ParamsActionType>) {
      state.paramsToGetTotalCount = action.payload;
    },
    setPagDisable(state, action: PayloadAction<boolean>) {
      state.pagDisable = action.payload;
    },
  },
});
export const {
  setParams,
  setparamsToGetTotalCount,
  setPagDisable,
  setItemList,
  getFullInfoList,
  setIsLoading,
  setTotalCount,
} = reducer.actions;
export default reducer.reducer;
