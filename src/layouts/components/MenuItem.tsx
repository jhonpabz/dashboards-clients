import { useRouter } from "next/navigation";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function MenuItem(props: ComponentsPropsNamespace.MenuItem) {
  const { menuItem, ...restProps } = props;
  const router = useRouter();

  const handleNavigate = () => {
    router.push(menuItem.path);
  };

  return (
    <BaseComponentLayout {...restProps}>
      <li onClick={handleNavigate} className="my-[50px] cursor-pointer">
        {menuItem.name}
      </li>
    </BaseComponentLayout>
  );
}
