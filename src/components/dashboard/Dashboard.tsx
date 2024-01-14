"use client";
import { useMemo } from "react";

import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { ColumnContainer, Container } from "@/components/dashboard";
import { clientConfiguration } from "@/utils/clientConfiguration";

export function Dashboard(props: ComponentsPropsNamespace.Dashboard) {
  const { client, ...restProps } = props;

  const dashboardConfiguration = useMemo(() => {
    return clientConfiguration(client);
  }, [client]);

  const containerColumnSize = dashboardConfiguration?.columns.length;

  return (
    <BaseComponentLayout {...restProps}>
      <Container size={containerColumnSize}>
        {dashboardConfiguration?.columns.map((data, index) => (
          <ColumnContainer key={index} data={data} />
        ))}
      </Container>
    </BaseComponentLayout>
  );
}
