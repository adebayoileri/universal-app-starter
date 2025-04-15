import { ViewStyle } from "react-native";

// Product related types
export interface ProductSource {
  web: string;
  native: string;
}

export interface Product {
  id: string;
  name: string;
  source: ProductSource;
}

export interface Category {
  id: string;
  name: string;
  source: ProductSource;
}

export interface CategoryData {
  category: Category;
  products: Product[];
}

// Component Props types
export interface ProductProps {
  products: Product[];
  categoryId: string;
}

export interface ProductsSidebarProps {
  categories: Category[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

// Web-specific style type that includes CSS properties
interface WebViewStyle extends ViewStyle {
  backgroundImage?: string;
}

export interface GradientOverlayProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle | WebViewStyle;
  children?: React.ReactNode;
}

// Utility function types
export type GetProductImageSource = (
  product: Product,
  categoryId: string,
) => any;
export type GetCategoryImageSource = (category: Category) => any;
export type GetCaretIconSource = () => any;
