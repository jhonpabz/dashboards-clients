import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function CardCount(props: ComponentsPropsNamespace.CardCount) {
  const { count, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <span className="text-[14px]">{count}</span>
    </BaseComponentLayout>
  );
}
