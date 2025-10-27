import { memo } from "react";
import logo from "../../shared/assets/logo/logo.svg";
import { NavLink } from "../../shared/ui/Navlink/Navlink";
import { SidebarNavigation } from "../../shared/config/routes";

export const Sidebar = memo(() => {
  return (
    <div className="w-[248px] bg-bg-py max-[770px]:hidden">
      <div className="pt-[19px] flex justify-center">
        <img src={logo} alt="" />
      </div>

      <div className="pt-[47px]">
        {SidebarNavigation.map((item) => (
          <NavLink to={item.to} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
});
