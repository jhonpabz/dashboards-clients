import { configuration } from "@/constants/configuration";

export const clientConfiguration = (client: string) => {
  switch (client) {
    case "pokemon":
      return configuration;
    default:
      return configuration;
  }
};
