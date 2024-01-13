import { Key, useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { Card, HeaderTitle } from "@/components/dashboard";

export function ColumnContainer(
  props: ComponentsPropsNamespace.ColumnContainer
) {
  const { data, children, ...restProps } = props;
  const { size, heading, widgets } = data;

  const gridColumnClass = useMemo(() => {
    const columnSize = size.toString();
    return `grid-cols-${columnSize}`;
  }, [size]);

  return (
    <BaseComponentLayout {...restProps}>
      <HeaderTitle>{heading}</HeaderTitle>
      <ul className={`${gridColumnClass} grid gap-2`}>
        {widgets.map((widget: any, widgetIndex: Key | null | undefined) => (
          <Card key={widgetIndex} widgetData={widget} />
        ))}
      </ul>
    </BaseComponentLayout>
  );
}
