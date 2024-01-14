import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { CardTitle, CardSubTitle, CardList } from "@/components/dashboard";

export function Card(props: ComponentsPropsNamespace.Card) {
  const { widgetData, ...restProps } = props;

  const isShowCardList = widgetData.type === "list";

  return (
    <BaseComponentLayout {...restProps}>
      <div className="w-full bg-white">
        <CardTitle>{widgetData.title}</CardTitle>
        <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
        {isShowCardList && <CardList api={widgetData.api} />}
      </div>
    </BaseComponentLayout>
  );
}
