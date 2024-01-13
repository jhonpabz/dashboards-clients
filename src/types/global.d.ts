namespace Configuration {
  type ConfigurationType = {
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
