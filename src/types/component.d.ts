declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;
  type CardTitle = React.HTMLAttributes<HTMLElement>;
  type CardSubTitle = React.HTMLAttributes<HTMLElement>;
  type HeaderTitle = React.HTMLAttributes<HTMLElement>;

  type Card = React.HTMLAttributes<HTMLElement> & {
    widgetData: Configuration.WidgetsType;
  };
}
