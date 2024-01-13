import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export function CardList(props: ComponentsPropsNamespace.CardList) {
  const { name, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <li className="text-[14px]">{name}</li>
    </BaseComponentLayout>
  );
}
