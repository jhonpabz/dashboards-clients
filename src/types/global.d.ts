namespace Configuration {
  type ConfigurationType = {
    map(arg0: (data: any, index: any) => React.JSX.Element): React.ReactNode;
    columns: ColumnsType[];
  };

  type ColumnsType = {
    size: number;
    heading: string;
    widgets: WidgetsType[];
  };

  type WidgetsType = {
    title: string;
    subtitle?: string;
    type: string;
    api: string;
  };
}

type ListDataType = {
  name: string;
  url: string;
};
