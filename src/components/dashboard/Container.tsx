import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function Container(props: ComponentsPropsNamespace.Container) {
  const { columnSize = "2", children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    const gridCol = `grid-cols-${columnSize}`;
    return gridCol;
  }, [columnSize]);

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`${gridColumnClass} grid gap-5`}>{children}</div>
    </BaseComponentLayout>
  );
}
