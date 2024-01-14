import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { getColumnSize } from "@/utils/helpers";

export function Container(props: ComponentsPropsNamespace.Container) {
  const { size = 2, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    const columnSize = getColumnSize(size);
    return columnSize;
  }, [size]);

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`${gridColumnClass} grid gap-5 w-full`}>{children}</div>
    </BaseComponentLayout>
  );
}
