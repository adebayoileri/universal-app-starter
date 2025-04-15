import { Platform } from "react-native";

// Define interfaces for our data structure
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

/**
 * Get the image source for a category based on platform
 * @param category The category object
 * @returns The appropriate image source for the current platform
 */
export const getCategoryImageSource = (category: Category) => {
  if (Platform.OS === "web") {
    return category.source.web;
  } else {
    // For native, we need to use a static require
    // Map the category ID to the appropriate image
    switch (category.id) {
      case "dried_fruits_&_nuts":
        return require("../assets/kmgRobust/categories/dried_fruits_&_nuts.png");
      case "dry_spices":
        return require("../assets/kmgRobust/categories/dry_spices.png");
      case "grains_&_cereals":
        return require("../assets/kmgRobust/categories/grains_&_cereals.png");
      case "herbs_&_dehydrates":
        return require("../assets/kmgRobust/categories/herbs_&_dehydrates.png");
      case "organic":
        return require("../assets/kmgRobust/categories/organic.png");
      case "pulses":
        return require("../assets/kmgRobust/categories/pulses.png");
      case "seeds":
        return require("../assets/kmgRobust/categories/seeds.png");
      default:
        return require("../assets/kmgRobust/categories/dried_fruits_&_nuts.png");
    }
  }
};

/**
 * Get the image source for a product based on platform and category
 * @param product The product object
 * @param categoryId The ID of the category this product belongs to
 * @returns The appropriate image source for the current platform
 */
export const getProductImageSource = (product: Product, categoryId: string) => {
  if (Platform.OS === "web") {
    return product.source.web;
  } else {
    // For native, we need to use a static require
    // Map the product ID and category to the appropriate image
    switch (categoryId) {
      case "dried_fruits_&_nuts":
        switch (product.id) {
          case "black_pepper":
            return require("../assets/kmgRobust/dried_fruits_&_nuts/black_pepper.png");
          case "cloves":
            return require("../assets/kmgRobust/dried_fruits_&_nuts/cloves.png");
          case "white_pepper":
            return require("../assets/kmgRobust/dried_fruits_&_nuts/white_pepper.png");
          default:
            return require("../assets/kmgRobust/dried_fruits_&_nuts/black_pepper.png");
        }
      case "dry_spices":
        switch (product.id) {
          case "black_pepper":
            return require("../assets/kmgRobust/dry_spices/black_pepper.png");
          case "cloves":
            return require("../assets/kmgRobust/dry_spices/cloves.png");
          case "white_pepper":
            return require("../assets/kmgRobust/dry_spices/white_pepper.png");
          default:
            return require("../assets/kmgRobust/dry_spices/black_pepper.png");
        }
      default:
        // Return a default image if the category or product is not found
        return require("../assets/kmgRobust/dried_fruits_&_nuts/black_pepper.png");
    }
  }
};
