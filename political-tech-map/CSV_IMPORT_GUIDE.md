# CSV Data Import Guide

## How to Import map_data.csv into the Application

The CSV file `/PTS_Map/data/map_data.csv` contains all company information. Here's how to import it:

### Option 1: Manual TypeScript Conversion

Create a script to convert CSV to TypeScript array:

```typescript
// src/data/importCSV.ts
import { Entity } from '../types';

// Copy this function and run it to convert CSV
export function csvToEntities(csvData: string): Entity[] {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',');
  const entities: Entity[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    
    // Map CSV columns to Entity interface
    const entity: Entity = {
      entityName: values[1]?.trim() || '',
      category: values[6]?.trim() || '',
      subcategory: values[9]?.trim() || '',
      logoUrl: values[2]?.trim() || '',
      websiteUrl: values[4]?.trim() || '',
      hq: values[3]?.trim() || '',
      domain: values[4]?.trim() || '',
      description: values[5]?.trim() || '',
      mapBucket1: values[6]?.trim() || '',
      mapBucket2: values[7]?.trim() || '',
      relevanceFlag: values[8]?.trim() === 'Y' ? 'Y' : 'N',
      subBucket: values[9]?.trim() || '',
      toolsProducts: values[10]?.trim() || '',
    };

    // Only add entities with relevance flag Y
    if (entity.relevanceFlag === 'Y' && entity.entityName) {
      entities.push(entity);
    }
  }

  return entities;
}
```

### Option 2: Use Google Sheets API (Recommended)

The app is already set up to fetch from Google Sheets. Update the sheet structure to match:

**Required Columns in Google Sheet:**
1. Entity Name
2. Logo URL
3. Website URL
4. HQ
5. Domain
6. Description
7. Category (Map Bucket 1)
8. Subcategory (Sub Bucket)
9. Relevance Flag (Y/N)
10. Map Bucket 2
11. Tools/Products

### CSV Column Mapping

From `map_data.csv` to `Entity` interface:

| CSV Column | Entity Field | Description |
|------------|--------------|-------------|
| Entity | entityName | Company name |
| Logo | logoUrl | Logo image URL |
| Domain | websiteUrl | Website URL |
| HQ | hq | Headquarters location |
| Domain | domain | Domain (duplicate of websiteUrl) |
| Description | description | Company description |
| Map Bucket 1 | category | Main category |
| Map Bucket 2 | mapBucket2 | Secondary category |
| Relevance Flag (Y/N) | relevanceFlag | Include in map (Y/N) |
| Sub Bucket | subcategory | Subcategory |
| Tools/Products | toolsProducts | Products offered |

### Quick Import Steps

1. **Open** `/PTS_Map/data/map_data.csv`
2. **Filter** rows where "Relevance Flag" = "Y"
3. **For each row**, create an Entity object:

```typescript
{
  category: row['Map Bucket 1'],
  subcategory: row['Sub Bucket'],
  entityName: row['Entity'],
  logoUrl: row['Logo'],
  websiteUrl: row['Domain'],
  hq: row['HQ'],
  domain: row['Domain'],
  description: row['Description'],
  relevanceFlag: row['Relevance Flag (Y/N)'],
  mapBucket1: row['Map Bucket 1'],
  mapBucket2: row['Map Bucket 2'],
  subBucket: row['Sub Bucket'],
  toolsProducts: row['Tools/Products'],
}
```

### Example: First Entry from CSV

```typescript
{
  entityName: 'influencethe.com',
  category: 'Media & Messaging',
  subcategory: 'Information Integrity / Disinformation',
  logoUrl: '',
  websiteUrl: 'https://influencethe.com/',
  hq: 'Bulgaria',
  domain: 'https://influencethe.com/',
  description: 'Disinformation detection & "community intelligence" platform; narrative creation/distribution and counter-messaging; political campaigning services (NationBuilder partner)',
  relevanceFlag: 'Y',
  mapBucket1: 'Media & Messaging',
  mapBucket2: '',
  subBucket: 'Information Integrity / Disinformation',
  toolsProducts: '',
}
```

### Category Name Mapping

Some CSV categories need to be mapped to match the UI:

| CSV Name | UI Display Name |
|----------|----------------|
| Media & Messaging | Messaging & Media |
| Data Analytics and Modeling | Data Analytics & Modeling |
| Volunteer Mobilisation | Volunteer & Activist Mobilization |
| Voter Engagement | Voter Engagement |
| Fundraising | Fundraising |
| Research | Research |
| Voting Tech | Voter Contact |
| Organisational Infrastructure | Movement-Wide |

### Testing After Import

1. ✅ Check that all companies appear in correct categories
2. ✅ Click each company logo to verify popup works
3. ✅ Verify all information displays correctly in modal
4. ✅ Test "Visit Website" button opens correct URL
5. ✅ Ensure only entries with `Relevance Flag = Y` appear

---

**Note**: The current `sampleEntities` in `src/data/entities.ts` is placeholder data. Replace it with CSV-imported data for production use.
