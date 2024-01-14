"use client";
import { useEffect } from "react";

import useDashboard from "@/hooks/redux/useDashboard";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function CardCount(props: ComponentsPropsNamespace.CardCount) {
  const { api, ...restProps } = props;
  const { handleGetCount, state } = useDashboard();

  useEffect(() => {
    handleGetCount(api);
  }, [api, handleGetCount]);

  return (
    <BaseComponentLayout {...restProps}>
      <span className="text-[40px] font-[500]">{state.countData}</span>
    </BaseComponentLayout>
  );
}
