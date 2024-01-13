"use client";

import { Container, ColumnContainer } from "@/components/dashboard";
import { configuration } from "@/constants/configuration";

export default function HomePage() {
  const columnSize = configuration.columns.length.toString();
  const dashboardTypes = configuration.columns;

  return (
    <>
      <Container columnSize={columnSize}>
        {dashboardTypes.map((data, index) => (
          <ColumnContainer key={index} data={data} />
        ))}
      </Container>
    </>
  );
}
