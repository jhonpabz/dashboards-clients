import { useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/useReduxState";
import { DashboardAction } from "@/stores/dashboard.reducer";
import { useWidgetData } from "@/hooks/data/useWidgetData";

export default function useDashboard() {
  const { client } = useAppSelector((s) => s.dashboard);
  const dispatch = useAppDispatch<DashboardAction>();
  const { getList } = useWidgetData();
  const [listData, setListData] = useState<ListDataType[]>([]);

  const setClient = useCallback(
    (payload: string) => {
      dispatch({
        type: "dashboard/setClient",
        payload,
      });
    },
    [dispatch]
  );

  const handleGetList = useCallback(
    async (api: string) => {
      const res = await getList(api);

      setListData(res.results);
    },
    [getList, setListData]
  );

  return {
    state: {
      client,
      listData,
    },

    setClient,
    handleGetList,
  };
}
