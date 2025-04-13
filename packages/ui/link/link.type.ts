export interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  // Allow additional HTML anchor attributes (e.g., style, onClick)
  [key: string]: any;
}
