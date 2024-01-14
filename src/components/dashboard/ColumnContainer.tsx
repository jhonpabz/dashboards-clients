import { Key, useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { Card } from "@/components/dashboard";
import { getColumnSize } from "@/utils/helpers";

export function ColumnContainer(
  props: ComponentsPropsNamespace.ColumnContainer
) {
  const { data, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    const columnSize = getColumnSize(data.size);
    return columnSize;
  }, [data.size]);

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`${gridColumnClass} grid gap-2 w-full`}>
        {data.widgets.map(
          (
            widget: Configuration.WidgetsType,
            widgetIndex: Key | null | undefined
          ) => (
            <Card key={widgetIndex} widgetData={widget} />
          )
        )}
      </div>
    </BaseComponentLayout>
  );
}
