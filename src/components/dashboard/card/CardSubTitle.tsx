import BaseComponentLayout from '@/layouts/BaseComponentLayout';

export function CardSubTitle(props: ComponentsPropsNamespace.CardSubTitle) {
  const { children, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <p className="text-[14px]">{children}</p>
    </BaseComponentLayout>
  );
}
