// import SidebarNav from "@/layouts/SidebarNav";

export default function BaseLayout(props: ComponentsPropsNamespace.BaseLayout) {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-row">
        {/* Comment out to show Sidebar */}
        {/* <SidebarNav /> */}
        {props.children}
      </div>
    </>
  );
}
