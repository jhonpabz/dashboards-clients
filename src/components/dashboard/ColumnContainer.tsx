import { Key, useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { Card, HeaderTitle } from "@/components/dashboard";
import { getColumnSize } from "@/utils/helpers";

export function ColumnContainer(
  props: ComponentsPropsNamespace.ColumnContainer
) {
  const { data, children, ...restProps } = props;
  const { size, heading, widgets } = data;

  const gridColumnClass = useMemo(() => {
    const columnSize = getColumnSize(size);
    return columnSize ? columnSize : "grid-cols-2";
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
