export interface SidebarNavItem {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
  href?: string;
}

export interface SidebarProps {
  navItems: SidebarNavItem[];
  bgColor?: string;
  header?: React.ReactNode; // For logo or user info
  footer?: React.ReactNode; // For extra links or actions
  width?: string | number;
}
