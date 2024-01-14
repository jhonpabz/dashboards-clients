import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function CardTitle(props: ComponentsPropsNamespace.CardTitle) {
  const { children, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <p className="text-[20px] md:text-[23px] lg:text-[26px] font-[700]">
        {children}
      </p>
    </BaseComponentLayout>
  );
}
