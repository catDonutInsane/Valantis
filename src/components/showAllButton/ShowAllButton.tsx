import { params } from "../../utils/setparams";
import { useAppDispatch } from "../../hooks/hooks";
import { setParams, setPagDisable } from "../../reducers/reducer";
export const ShowAllButton = () => {
  let dispatch = useAppDispatch();
  let showAll = () => {
    dispatch(setParams(params.getParamsForAll(0, "get_ids", 50)));
    dispatch(setPagDisable(false));
  };

  return <button onClick={() => showAll()}>Показать всё</button>;
};
