import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice.js";
import { fetchStatusActions } from "../store/fetchStatusSlice.js";

export default function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}
