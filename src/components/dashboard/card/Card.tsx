import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { CardList, CardCount } from "@/components/dashboard";

export function Card(props: ComponentsPropsNamespace.Card) {
  const { widgetData, ...restProps } = props;

  const isShowCardList = widgetData.type === "list";
  const isShowCardCount = widgetData.type === "number";

  return (
    <BaseComponentLayout {...restProps}>
      <div className="w-full bg-white">
        {isShowCardList && (
          <CardList widgetData={widgetData} api={widgetData.api} />
        )}

        {isShowCardCount && (
          <CardCount title={widgetData.title} api={widgetData.api} />
        )}
      </div>
    </BaseComponentLayout>
  );
}
