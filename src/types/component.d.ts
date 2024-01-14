declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;
  type CardTitle = React.HTMLAttributes<HTMLElement>;
  type CardSubTitle = React.HTMLAttributes<HTMLElement>;
  type HeaderTitle = React.HTMLAttributes<HTMLElement>;
  type BaseLayout = React.HTMLAttributes<HTMLDivElement>;

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
  };

  type CardCount = React.HTMLAttributes<HTMLElement> & {
    api: string;
  };

  type Dashboard = React.HTMLAttributes<HTMLElement> & {
    client: string;
  };

  type MenuItem = React.HTMLAttributes<HTMLElement> & {
    menuItem: RouteType;
  };
}
