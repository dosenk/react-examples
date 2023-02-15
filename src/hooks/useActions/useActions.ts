import { useMemo } from "react";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { useAppDispatch } from "../useStore";

export default function useActions<T extends ActionCreatorsMapObject>(
  actions: T,
) {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
}
