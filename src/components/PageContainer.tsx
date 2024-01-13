import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function PageContainer(
  props: ComponentsPropsNamespace.PageContainer
) {
  const { children, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <div className="m-auto w-full p-[20px] md:p-[40px]">{children}</div>
    </BaseComponentLayout>
  );
}
