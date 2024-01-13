import BaseComponentLayout from '@/layouts/BaseComponentLayout';
import { CardTitle, CardSubTitle } from '@/components/dashboard';

export function Card(props: ComponentsPropsNamespace.Card) {
  const { widgetData, ...restProps } = props;
  return (
    <BaseComponentLayout {...restProps}>
      <li className="w-full bg-white">
        <CardTitle>{widgetData.title}</CardTitle>
        <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
      </li>
    </BaseComponentLayout>
  );
}
