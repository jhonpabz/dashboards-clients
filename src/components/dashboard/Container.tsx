import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function Container(props: ComponentsPropsNamespace.Container) {
  const { size, children, ...restProps } = props;

  const gridColumnClass = useMemo(() => {
    switch (size) {
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
  }, [size]);

  if (!gridColumnClass) return <p>Loading..</p>;

  return (
    <BaseComponentLayout {...restProps}>
      <div className={`${gridColumnClass} grid gap-5 w-full`}>{children}</div>
    </BaseComponentLayout>
  );
}
