{
  /* Comment out to show Sidebar */
}

// import SidebarNav from "@/layouts/SidebarNav";

export default function BaseLayout(props: ComponentsPropsNamespace.BaseLayout) {
  return (
    <div className="flex min-h-screen flex-1 flex-row">
      {/* <SidebarNav /> */}
      {props.children}
    </div>
  );
}
