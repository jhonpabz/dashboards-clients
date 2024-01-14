"use client";
import { useEffect } from "react";

import useDashboard from "@/hooks/useDashboard";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { CardTitle } from "@/components/dashboard";

export function CardCount(props: ComponentsPropsNamespace.CardCount) {
  const { api, title, ...restProps } = props;
  const { handleGetCount, state } = useDashboard();

  useEffect(() => {
    handleGetCount(api);
  }, [api, handleGetCount]);

  return (
    <BaseComponentLayout {...restProps}>
      <>
        <CardTitle>{title}</CardTitle>
        <span className="text-[40px] font-[500]">{state.countData}</span>
      </>
    </BaseComponentLayout>
  );
}
