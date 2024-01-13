import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { getColumnSize } from "@/utils/helpers";

export function Container(props: ComponentsPropsNamespace.Container) {
  const { columnSize = 2, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    return getColumnSize(columnSize);
  }, [columnSize]);

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`${gridColumnClass} grid gap-5`}>{children}</div>
    </BaseComponentLayout>
  );
}
