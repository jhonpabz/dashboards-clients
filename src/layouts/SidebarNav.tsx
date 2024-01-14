"use client";

import MenuItem from "./components/MenuItem";
import { routes } from "@/constants/routes";

export default function SidebarNav() {
  return (
    <aside className="h-screen w-[300px] bg-secondary">
      <ul>
        {routes.map((item, index) => (
          <MenuItem key={index} menuItem={item} />
        ))}
      </ul>
    </aside>
  );
}
