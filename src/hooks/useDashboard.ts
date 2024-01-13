import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/useReduxState";
import { DashboardAction } from "@/stores/dashboard.reducer";

export default function useDashboard() {
  const { client } = useAppSelector((s) => s.dashboard);
  const dispatch = useAppDispatch<DashboardAction>();

  const setClient = useCallback(
    (payload: string) => {
      dispatch({
        type: "dashboard/setClient",
        payload,
      });
    },
    [dispatch]
  );

  return {
    state: {
      client,
    },

    setClient,
  };
}
