"use client";
import { useEffect } from "react";

import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import useDashboard from "@/hooks/useDashboard";
import { CardTitle, CardSubTitle } from "@/components/dashboard";

export function CardList(props: ComponentsPropsNamespace.CardList) {
  const { api, widgetData, ...restProps } = props;
  const { handleGetList, state } = useDashboard();

  useEffect(() => {
    handleGetList(api);
  }, [api, handleGetList]);

  return (
    <BaseComponentLayout {...restProps}>
      <>
        <CardTitle>{widgetData.title}</CardTitle>
        <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
        <ul>
          {state.listData?.map((item, listIndex) => (
            <li key={listIndex} className="text-[14px]">
              {item.name}
            </li>
          ))}
        </ul>
      </>
    </BaseComponentLayout>
  );
}
