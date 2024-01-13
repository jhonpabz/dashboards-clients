import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { CardTitle, CardSubTitle } from "@/components/dashboard";

export function Card(props: ComponentsPropsNamespace.Card) {
  const { widgetData, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <div className="w-full bg-white">
        <CardTitle>{widgetData.title}</CardTitle>
        <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
      </div>
    </BaseComponentLayout>
  );
}
