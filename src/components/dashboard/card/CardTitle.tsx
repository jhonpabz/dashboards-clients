import BaseComponentLayout from '@/layouts/BaseComponentLayout';

export function CardTitle(props: ComponentsPropsNamespace.CardTitle) {
  const { children, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <p className="text-[20px] font-[600]">{children}</p>
    </BaseComponentLayout>
  );
}
