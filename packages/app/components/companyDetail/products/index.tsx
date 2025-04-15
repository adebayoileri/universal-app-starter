import { View } from "ui/view";
import ProductsSidebar from "./sidebar";
import { useState, useEffect } from "react";
import { CategoryData } from "app/utils/imageMapping";
import Product from "./Product";

const allProductsJson = require("../../../assets/generated/category-data.json");

export default function Products() {
  const [allProducts, setAllProducts] = useState<CategoryData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = allProducts.map((product) => product.category);

  useEffect(() => {
    setAllProducts(allProductsJson);
  }, []);

  // Get the current category's products safely
  const currentCategoryProducts = allProducts[activeIndex]?.products || [];
  const currentCategoryId = categories[activeIndex]?.id || "";

  return (
    <View className="flex-1 bg-white w-screen h-screen  flex flex-row gap-x-4 pt-6">
      <ProductsSidebar
        categories={categories}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {allProducts.length > 0 && currentCategoryProducts.length > 0 && (
        <Product
          products={currentCategoryProducts}
          categoryId={currentCategoryId}
        />
      )}
    </View>
  );
}
