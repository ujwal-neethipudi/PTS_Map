import { Entity, CategoryData } from '../types';
import { csvEntities } from './csvParser';

// Use CSV data from map_data.csv
export const sampleEntities: Entity[] = csvEntities;

// Helper function to group entities by category
export function groupEntitiesByCategory(entities: Entity[]): Map<string, CategoryData> {
  const grouped = new Map<string, CategoryData>();

  entities.forEach((entity) => {
    const categoryName = entity.category;

    if (!grouped.has(categoryName)) {
      grouped.set(categoryName, {
        category: categoryName,
        subcategories: {},
        entities: [],
      });
    }

    const categoryData = grouped.get(categoryName)!;

    if (entity.subcategory) {
      // Add to subcategory
      if (!categoryData.subcategories) {
        categoryData.subcategories = {};
      }
      if (!categoryData.subcategories[entity.subcategory]) {
        categoryData.subcategories[entity.subcategory] = [];
      }
      categoryData.subcategories[entity.subcategory].push(entity);
    } else {
      // Add directly to category
      categoryData.entities.push(entity);
    }
  });

  return grouped;
}
