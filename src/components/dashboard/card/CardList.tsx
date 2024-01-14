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
        <div className="bg-white py-[10px] px-[5px] md:py-[14px] md:px-[7px] lg:py-[17px] lg:px-[10px]">
          <CardTitle isList>{widgetData.title}</CardTitle>
          <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
        </div>
        <ul className="">
          {state.listData?.map((item, listIndex) => (
            <li
              key={listIndex}
              className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-[600] bg-white my-[5px] p-[2px] md:p-[3px] lg:p-[5px] "
            >
              {item.name}
            </li>
          ))}
        </ul>
      </>
    </BaseComponentLayout>
  );
}
