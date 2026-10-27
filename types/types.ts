export type UserRole =
  | "Customer"
  | "Driver"
  | "FloorStaff"
  | "SalesStaff"
  | "Administrator";

export interface UserProfile {
  name: string;
  role: UserRole;
  email: string;
}

export interface WorkflowCardProps {
  title: string;
  role: UserRole;
  href: string;
  icon: React.ReactNode;
  description: string;
  activeRole?: UserRole;
}

export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};