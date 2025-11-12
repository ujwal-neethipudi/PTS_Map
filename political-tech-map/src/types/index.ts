export interface Entity {
  category: string;
  entityName: string;
  logoUrl?: string;
  websiteUrl?: string;
  linkedCategory?: string;
  relevanceFlag: 'Y' | 'N';
  subcategory?: string;
  hq?: string;
  domain?: string;
  description?: string;
  mapBucket1?: string;
  mapBucket2?: string;
  subBucket?: string;
  toolsProducts?: string;
}

export interface CategoryData {
  category: string;
  subcategories?: { [key: string]: Entity[] };
  entities: Entity[];
}
