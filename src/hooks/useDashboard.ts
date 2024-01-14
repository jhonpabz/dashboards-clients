import { useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/useReduxState";
import { DashboardAction } from "@/stores/dashboard.reducer";
import { useWidgetData } from "@/hooks/data/useWidgetData";

export default function useDashboard() {
  // const { client } = useAppSelector((s) => s.dashboard);
  // const dispatch = useAppDispatch<DashboardAction>();
  const { getList, getCount } = useWidgetData();
  const [listData, setListData] = useState<ListDataType[]>([]);
  const [countData, setCountData] = useState<number>(0);

  // const setClient = useCallback(
  //   (payload: string) => {
  //     dispatch({
  //       type: "dashboard/setClient",
  //       payload,
  //     });
  //   },
  //   [dispatch]
  // );

  const handleGetList = useCallback(
    async (api: string) => {
      const res = await getList(api);

      setListData(res?.results);
    },
    [getList, setListData]
  );

  const handleGetCount = useCallback(
    async (api: string) => {
      const res = await getCount(api);

      const count =
        res?.pokemon_species_details?.length +
        res?.required_for_evolution?.length;

      setCountData(count);
    },
    [getCount, setCountData]
  );

  return {
    state: {
      // client,
      listData,
      countData,
    },

    // setClient,
    handleGetList,
    handleGetCount,
  };
}
