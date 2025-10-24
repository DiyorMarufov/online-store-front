import { memo, type ReactNode } from "react";
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
  type NavLinkRenderProps,
} from "react-router-dom";

interface NavLinkProps extends RouterNavLinkProps {
  label: string;
  to: string;
  icon?: ReactNode;
}

export const NavLink = memo(({ label, icon, to, ...rest }: NavLinkProps) => {
  return (
    <RouterNavLink
      {...rest}
      to={to}
      className={({ isActive }: NavLinkRenderProps) =>
        `flex items-center p-3.5 transition-colors text-white ${
          isActive ? "bg-[#F06706]" : "hover:bg-white/20"
        }`
      }
    >
      {icon && <span className="pr-3">{icon}</span>}
      <span>{label}</span>
    </RouterNavLink>
  );
});
