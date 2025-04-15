import fs from "fs/promises";
import path from "path";

export async function getCategoryData() {
  const kmgRobust = path.join(__dirname, "../app/assets/kmgRobust");
  const nativeKmgRobust = path.join(
    __dirname,
    "../../apps/native/assets/kmgRobust",
  );
  const categoryImages = await fs.readdir(kmgRobust + "/categories");

  const categories = await Promise.all(
    categoryImages.map(async (imageFile) => {
      const categoryName = path.parse(imageFile).name;
      const productFolderPath = path.join(kmgRobust, categoryName);
      let productImages: string[] = [];
      try {
        productImages = await fs.readdir(productFolderPath);
      } catch (err) {
        console.warn(`No folder found for category: ${categoryName}`);
      }
      const products = productImages.map((productImage) => ({
        id: path.parse(productImage).name,
        name: path.parse(productImage).name.replace(/_/g, " "),
        source: {
          web: `assets/kmgRobust/${categoryName}/${productImage}`,
          native: `../../../assets/kmgRobust/${categoryName}/${productImage}`,
        },
      }));

      const category = {
        id: categoryName,
        name: categoryName.replace(/_/g, " "),
        source: {
          web: `assets/kmgRobust/categories/${imageFile}`,
          native: `../../../assets/kmgRobust/categories/${imageFile}`,
        },
      };
      return { category, products };
    }),
  );

  return categories;
}

// Main function to generate and save the data
async function generateAndSaveData() {
  try {
    const data = await getCategoryData();

    // Create the output directory if it doesn't exist
    const outputDir = path.join(__dirname, "../app/assets/generated");
    await fs.mkdir(outputDir, { recursive: true });

    // Save the data to a JSON file
    const outputPath = path.join(outputDir, "category-data.json");
    await fs.writeFile(outputPath, JSON.stringify(data, null, 2));

    console.log(`Category data generated successfully at: ${outputPath}`);
  } catch (error) {
    console.error("Error generating category data:", error);
    process.exit(1);
  }
}

// Run the function if this script is executed directly
if (require.main === module) {
  generateAndSaveData();
}
