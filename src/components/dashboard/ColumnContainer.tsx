import { Key, useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { Card } from "@/components/dashboard";

export function ColumnContainer(
  props: ComponentsPropsNamespace.ColumnContainer
) {
  const { data, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    switch (data.size) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      case 7:
        return "grid-cols-7";
      default:
        return "grid-cols-2";
    }
  }, [data.size]);

  if (!gridColumnClass) return <p>Loading..</p>;

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
