import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import {
  CardTitle,
  CardSubTitle,
  CardList,
  CardCount,
} from "@/components/dashboard";

export function Card(props: ComponentsPropsNamespace.Card) {
  const { widgetData, ...restProps } = props;

  const isShowCardList = widgetData.type === "list";
  const isShowCardCount = widgetData.type === "number";

  return (
    <BaseComponentLayout {...restProps}>
      <div className="w-full bg-white">
        {isShowCardList && (
          <>
            <CardTitle>{widgetData.title}</CardTitle>
            <CardSubTitle>{widgetData.subtitle}</CardSubTitle>
            <CardList api={widgetData.api} />
          </>
        )}

        {isShowCardCount && (
          <>
            <CardTitle>{widgetData.title}</CardTitle>
            <CardCount api={widgetData.api} />
          </>
        )}
      </div>
    </BaseComponentLayout>
  );
}
