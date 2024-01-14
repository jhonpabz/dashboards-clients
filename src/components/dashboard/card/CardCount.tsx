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
        <div className="bg-white py-[10px] px-[5px] md:py-[14px] md:px-[7px] lg:py-[17px] lg:px-[10px]">
          <CardTitle>{title}</CardTitle>
        </div>
        <span className="text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[80px] font-[400]">
          {state.countData}
        </span>
      </>
    </BaseComponentLayout>
  );
}
