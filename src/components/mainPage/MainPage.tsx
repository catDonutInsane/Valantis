import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ItemCard } from "../itemCard/ItemCard";
import { SortingMenu } from "../sortingMenu/SortingMenu";
import type { Item } from "../../types/types";
import { userAPI } from "../../api/api";
import { setIsLoading } from "../../reducers/reducer";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const {
    fullInfoList,
    isLoading,
    totalCount,
    paramsToGetTotalCount,
    pageSize,
    param,
  } = useAppSelector((state) => state.reducer);

  function loaddata() {
    dispatch(setIsLoading(true));
    userAPI.getItemListApi(dispatch, param).then((res) => {
      if (Array.isArray(res)) {
        userAPI.getFullInfoListApi(res, dispatch).then((res) => {
          dispatch(setIsLoading(false));
        });
      } else {
        loaddata();
      }
    });
  }

  useEffect(() => {
    loaddata();
  }, [pageSize, param, totalCount]);

  useEffect(() => {
    userAPI.getTC(dispatch, paramsToGetTotalCount);
  }, [paramsToGetTotalCount]);

  return (
    <div>
      {!isLoading ? (
        <div>
          <SortingMenu />
          {fullInfoList.map((i: Item) => (
            <div key={i.id}>
              <ItemCard {...i} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img
            style={{ width: "40px", height: "40px" }}
            src="https://icons8.com/preloaders/preloaders/1485/Gear.gif"
            alt="qweqw"
          />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};
