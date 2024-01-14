"use client";
import { useEffect } from "react";

import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import useDashboard from "@/hooks/redux/useDashboard";

export function CardList(props: ComponentsPropsNamespace.CardList) {
  const { api, ...restProps } = props;
  const { handleGetList, state } = useDashboard();

  useEffect(() => {
    handleGetList(api);
  }, [api, handleGetList]);

  return (
    <BaseComponentLayout {...restProps}>
      <ul>
        {state.listData?.map((item, listIndex) => (
          <li key={listIndex} className="text-[14px]">
            {item.name}
          </li>
        ))}
      </ul>
    </BaseComponentLayout>
  );
}
