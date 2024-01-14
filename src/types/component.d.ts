declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;
  type CardSubTitle = React.HTMLAttributes<HTMLElement>;
  type HeaderTitle = React.HTMLAttributes<HTMLElement>;
  type BaseLayout = React.HTMLAttributes<HTMLDivElement>;

  type CardTitle = React.HTMLAttributes<HTMLElement> & {
    isList?: boolean | undefined;
  };

  type Card = React.HTMLAttributes<HTMLElement> & {
    widgetData: Configuration.WidgetsType;
  };

  type PageContainer = React.HTMLAttributes<HTMLDivElement>;

  type Container = React.HTMLAttributes<HTMLElement> & {
    size: number;
  };

  type ColumnContainer = React.HTMLAttributes<HTMLElement> & {
    data: Configuration.ColumnsType;
  };

  type CardList = React.HTMLAttributes<HTMLElement> & {
    api: string;
    widgetData: Configuration.WidgetsType;
  };

  type CardCount = React.HTMLAttributes<HTMLElement> & {
    api: string;
    title: string;
  };

  type Dashboard = React.HTMLAttributes<HTMLElement> & {
    client: string;
  };

  type MenuItem = React.HTMLAttributes<HTMLElement> & {
    menuItem: RouteType;
  };
}
