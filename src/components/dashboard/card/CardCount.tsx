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
        <div className="py-[10px] md:py-[14px] lg:py-[17px]">
          <CardTitle>{title}</CardTitle>
        </div>
        <span className="text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[80px] font-[400]">
          {state.countData}
        </span>
      </>
    </BaseComponentLayout>
  );
}
