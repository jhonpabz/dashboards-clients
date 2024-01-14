declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;
  type CardTitle = React.HTMLAttributes<HTMLElement>;
  type CardSubTitle = React.HTMLAttributes<HTMLElement>;
  type HeaderTitle = React.HTMLAttributes<HTMLElement>;

  type Card = React.HTMLAttributes<HTMLElement> & {
    widgetData: Configuration.WidgetsType;
  };

  type PageContainer = React.HTMLAttributes<HTMLDivElement>;

  type ColumnContainer = React.HTMLAttributes<HTMLElement> & {
    data: Configuration.ColumnsType;
  };

  type CardList = React.HTMLAttributes<HTMLElement> & {
    api: string;
  };

  type CardCount = React.HTMLAttributes<HTMLElement> & {
    count: string;
  };
}
