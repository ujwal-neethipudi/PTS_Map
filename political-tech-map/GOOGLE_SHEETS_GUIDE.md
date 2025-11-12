# Google Sheets Data Template

## Required Columns

Your Google Sheet should have the following columns (in any order):

| Column Name | Description | Example | Required |
|------------|-------------|---------|----------|
| Category | Main category name | "Messaging & Media" | Yes |
| Subcategory | Sub-category name | "Creative Asset Development" | No |
| Entity Name | Company/tool name | "Treefly" | Yes |
| Logo URL | Direct link to logo image | "https://example.com/logo.png" | No |
| Website URL | Company website | "https://treefly.com" | No |
| Linked Category | Category to connect with arrows | "Paid Media" | No |
| Relevance Flag | "Y" to show, "N" to hide | "Y" | Yes |

## Sample Data

Here's a sample row structure:

```
Category: Messaging & Media
Subcategory: Creative Asset Development
Entity Name: Treefly
Logo URL: https://via.placeholder.com/100
Website URL: https://example.com
Linked Category: 
Relevance Flag: Y
```

## Setup Instructions

### 1. Create the Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Political Tech Landscape Data"
4. Add the column headers in Row 1

### 2. Make it Public (Option A - Simple)

1. Click "Share" button
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the sheet ID from the URL

The URL looks like: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

### 3. Enable API Access (Option B - Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "Google Sheets API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key
6. Restrict the key to "Google Sheets API" only

### 4. Configure the Application

Edit `src/data/entities.ts`:

```typescript
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const API_KEY = 'YOUR_API_KEY_HERE';
const SHEET_NAME = 'Sheet1'; // or your sheet tab name
```

## Data Guidelines

### Category Names

Use consistent category names. Recommended categories:

- Messaging & Media
- Paid Media
- Owned Media / Digital Content
- Data Analytics & Modeling
- Voter Engagement
- Volunteer & Activist Mobilization
- Voter Contact
- Fundraising
- Movement-Wide
- Research

### Subcategory Examples

**Messaging & Media:**
- Creative Asset Development
- Message Development
- Content Testing & Optimization

**Paid Media:**
- TV Targeting
- Digital Ad Targeting
- TV Buying
- Influencer Marketing

**Voter Engagement:**
- Voter & Volunteer CRM
- Voter Modeling & Targeting

**Fundraising:**
- Donor CRM
- Donation Portals
- Donor Experience
- Payment Processing
- Regulatory Compliance & Reporting

### Logo URLs

- Use direct image URLs (ending in .png, .jpg, .svg)
- Recommended size: 200x200px minimum
- Transparent background preferred
- Square or horizontal logos work best

**Good sources:**
- Company website (look for press kit)
- Clearbit Logo API: `https://logo.clearbit.com/{domain}`
- Company's social media profile images

Example: `https://logo.clearbit.com/treefly.com`

### Linked Category

Use this to create arrow connections between categories:

- Enter the exact category name you want to link to
- Leave blank if no connection needed
- Multiple connections per category will be deduplicated

Example:
```
Category: Messaging & Media
Linked Category: Paid Media
```
This creates an arrow from "Messaging & Media" → "Paid Media"

### Relevance Flag

- **Y**: Entity will be displayed
- **N**: Entity will be hidden (but kept in data)

Use this to:
- Hide outdated companies
- Toggle seasonal/temporary entities
- A/B test different configurations

## Batch Import Template

You can copy this CSV template:

```csv
Category,Subcategory,Entity Name,Logo URL,Website URL,Linked Category,Relevance Flag
Messaging & Media,Creative Asset Development,Treefly,https://logo.clearbit.com/treefly.com,https://treefly.com,,Y
Messaging & Media,Creative Asset Development,SmartShoot,https://logo.clearbit.com/smartshoot.com,https://smartshoot.com,,Y
Paid Media,TV Targeting,iSpot,https://logo.clearbit.com/ispot.tv,https://ispot.tv,Messaging & Media,Y
```

## Tips

1. **Keep entity names short** - They display in small tiles
2. **Use high-quality logos** - Low-res images look pixelated
3. **Test links** - Verify website URLs work
4. **Be consistent** - Use same category spelling throughout
5. **Document changes** - Use Google Sheets version history

## Troubleshooting

### Images not loading?
- Check if URL is publicly accessible
- Verify URL ends with image extension
- Try using Clearbit: `https://logo.clearbit.com/{domain}`

### Categories not appearing?
- Check spelling matches exactly
- Ensure Relevance Flag is "Y"
- Verify category is in `categoryOrder` array

### API not working?
- Verify API key is correct
- Check sheet is publicly accessible
- Make sure SHEET_ID is correct
- Check browser console for errors

## Example Sheet Structure

| Category | Subcategory | Entity Name | Logo URL | Website URL | Linked Category | Relevance Flag |
|----------|------------|-------------|----------|-------------|-----------------|----------------|
| Messaging & Media | Creative Asset Development | Treefly | https://... | https://... | | Y |
| Messaging & Media | Creative Asset Development | SmartShoot | https://... | https://... | | Y |
| Messaging & Media | Message Development | Quiller | https://... | https://... | Paid Media | Y |
| Paid Media | TV Targeting | iSpot | https://... | https://... | | Y |

## Advanced: Programmatic Updates

You can update the sheet programmatically using Google Sheets API:

```javascript
// Example: Append a new row
const appendRow = async (values) => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=RAW&key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [values] })
    }
  );
  return response.json();
};

// Usage
await appendRow([
  'Messaging & Media',
  'Creative Asset Development',
  'New Company',
  'https://logo.clearbit.com/newco.com',
  'https://newco.com',
  '',
  'Y'
]);
```

---

Need help? Check the [main README](./README.md) or open an issue!
