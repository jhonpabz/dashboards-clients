import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function CardSubTitle(props: ComponentsPropsNamespace.CardSubTitle) {
  const { children, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <p className="text-[10px] md:text-[12px] lg:text-[14px] text-sub">
        {children}
      </p>
    </BaseComponentLayout>
  );
}
