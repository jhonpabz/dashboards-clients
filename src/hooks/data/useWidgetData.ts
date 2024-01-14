export function useWidgetData() {
  async function getList(api: string) {
    try {
      const response = await fetch(api);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  async function getCount(api: string) {
    try {
      const response = await fetch(api);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  return {
    getList,
    getCount,
  };
}
