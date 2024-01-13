import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function HeaderTitle(props: ComponentsPropsNamespace.HeaderTitle) {
  const { children, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <h1 className="text-[30px] font-[600] mb-[15px]">{children}</h1>
    </BaseComponentLayout>
  );
}
