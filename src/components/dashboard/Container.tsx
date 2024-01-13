import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { getColumnSize } from "@/utils/helpers";

export function Container(props: ComponentsPropsNamespace.Container) {
  const { columnSize = 2, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    const colSize = getColumnSize(columnSize);
    return colSize ? colSize : "grid-cols-2";
  }, [columnSize]);

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`grid gap-5 ${gridColumnClass}`}>{children}</div>
    </BaseComponentLayout>
  );
}
