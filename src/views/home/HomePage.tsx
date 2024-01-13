"use client";

import PageContainer from "@/components/PageContainer";
import { ColumnContainer } from "@/components/dashboard";
import { configuration } from "@/constants/configuration";

export default function HomePage() {
  const dashboardTypes = configuration.columns;

  return (
    <PageContainer>
      {dashboardTypes.map((data, index) => (
        <ColumnContainer key={index} data={data} />
      ))}
    </PageContainer>
  );
}
