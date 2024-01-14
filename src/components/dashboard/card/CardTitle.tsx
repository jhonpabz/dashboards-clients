import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { useMemo } from "react";

export function CardTitle(props: ComponentsPropsNamespace.CardTitle) {
  const { children, isList = false, ...restProps } = props;

  const textColorClass = useMemo(() => {
    return isList ? "text-title-blue" : "text-title-green";
  }, [isList]);

  return (
    <BaseComponentLayout {...restProps}>
      <h2
        className={`${textColorClass} text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21] xl:text-[26px] font-[700]`}
      >
        {children}
      </h2>
    </BaseComponentLayout>
  );
}
