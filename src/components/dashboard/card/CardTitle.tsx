import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { useMemo } from "react";

export function CardTitle(props: ComponentsPropsNamespace.CardTitle) {
  const { children, isList = false, ...restProps } = props;

  const textColorClass = useMemo(() => {
    return isList ? "text-title-blue" : "text-title-green";
  }, [isList]);

  return (
    <BaseComponentLayout {...restProps}>
      <p
        className={`${textColorClass} text-[20px] md:text-[23px] lg:text-[26px] font-[700]`}
      >
        {children}
      </p>
    </BaseComponentLayout>
  );
}
