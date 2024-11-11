import { SidebarItem } from "@/types/sidebar-item";
import { BedDouble, LayoutDashboard, UsersRound, Utensils } from "lucide-react";
import micromatch from "micromatch";

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "/",
    Icon: LayoutDashboard,
    selected: function (href: string) {
      return this.href === href;
    },
  },
  {
    id: 2,
    label: "Guests",
    href: "/guests",
    pattern: "/guests/**",
    Icon: UsersRound,
    selected: function (href: string) {
      return micromatch.isMatch(href, this.pattern!);
    },
  },
  {
    id: 3,
    label: "Rooms",
    href: "/rooms",
    pattern: "/rooms/**",
    Icon: BedDouble,
    selected: function (href: string) {
      return micromatch.isMatch(href, this.pattern!);
    },
  },
  {
    id: 4,
    label: "Menu",
    href: "/menu",
    pattern: "/menu/**",
    Icon: Utensils,
    selected: function (href: string) {
      return micromatch.isMatch(href, this.pattern!);
    },
  },
];
