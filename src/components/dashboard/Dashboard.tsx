"use client";
import { useMemo } from "react";

import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { ColumnContainer } from "@/components/dashboard";
import { clientConfiguration } from "@/utils/clientConfiguration";

export function Dashboard(props: ComponentsPropsNamespace.Dashboard) {
  const { client, ...restProps } = props;

  const dashboardConfiguration = useMemo(() => {
    return clientConfiguration(client);
  }, [client]);

  return (
    <BaseComponentLayout {...restProps}>
      {dashboardConfiguration?.columns.map((data, index) => (
        <ColumnContainer key={index} data={data} />
      ))}
    </BaseComponentLayout>
  );
}
