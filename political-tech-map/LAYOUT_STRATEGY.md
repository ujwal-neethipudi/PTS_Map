# Political Tech Landscape Map - Layout & Connection Strategy

## 📐 Grid Layout Structure

The landscape map uses a **horizontal left-to-right flow** with 10 main category boxes arranged sequentially:

```
[Messaging & Media] → [Paid Media] → [Owned Media] → [Data Analytics] → [Voter Engagement] → 
[Volunteer & Activist] → [Voter Contact] → [Fundraising] → [Movement-Wide] → [Research]
```

### Category Order (defined in `App.tsx`):
1. **Messaging & Media** - Content creation and messaging
2. **Paid Media** - TV and digital advertising
3. **Owned Media / Digital Content** - Websites, social media, email
4. **Data Analytics & Modeling** - Data analysis and modeling
5. **Voter Engagement** - Voter outreach and engagement
6. **Volunteer & Activist Mobilization** - Organizing supporters
7. **Voter Contact** - Direct voter contact methods
8. **Fundraising** - Donation and fundraising tools
9. **Movement-Wide** - Cross-category infrastructure
10. **Research** - Polling and research tools

---

## 🔗 Arrow Connection Strategy

Arrows are drawn based on the **`linkedCategory`** field in the entity data (`entities.ts`).

### How Connections Work:

1. **Entity Level**: Each entity can have a `linkedCategory` field
2. **Arrow Creation**: When an entity has `linkedCategory`, an arrow is drawn FROM the entity's category TO the linked category
3. **ID Generation**: Category names are converted to IDs:
   - Replace spaces with hyphens: ` ` → `-`
   - Convert to lowercase
   - Example: `"Data Analytics & Modeling"` → `"data-analytics-&-modeling"`

### Example Connection Flow:

```typescript
// In entities.ts:
{ 
  category: 'Messaging & Media', 
  subcategory: 'Content Testing & Optimization', 
  entityName: 'GROUND',
  linkedCategory: 'Paid Media'  // ← This creates an arrow
}
```

**Result**: Arrow drawn from `messaging-&-media` → `paid-media`

---

## 🎯 Typical Campaign Flow (based on Political Tech infographic):

```
MESSAGING & MEDIA
    ↓
PAID MEDIA (ads created from messaging)
    ↓
VOTER ENGAGEMENT (ads drive engagement)
    ↑
DATA ANALYTICS (data informs targeting)
    ↓
VOLUNTEER & ACTIVIST MOBILIZATION (engagement converts to action)
    ↓
VOTER CONTACT (volunteers reach voters)
    ↑
FUNDRAISING (funds enable all activities) → flows to multiple categories
```

---

## 🏗️ Component Architecture

### Grid Layout:
- **Width**: Each category box = `360px`
- **Gap**: `12px` (gap-3) between boxes
- **Grid**: 4 columns per subcategory
- **Borders**: 4px black borders on main categories, 2px on subcategories

### Logo Tiles:
- **Height**: `32px` (h-8)
- **Grid**: 4 columns within each subcategory
- **Gap**: `4px` (gap-1)
- **Borders**: 1px black borders

---

## 🎨 Category Accent Colors

Each category has a unique accent color (shown as 6px top border):

```javascript
'messaging-&-media': '#00BCD4',                    // Cyan
'paid-media': '#2196F3',                           // Blue
'owned-media-/-digital-content': '#4CAF50',        // Green
'data-analytics-&-modeling': '#9C27B0',            // Purple
'voter-engagement': '#FF9800',                     // Orange
'volunteer-&-activist-mobilization': '#F44336',    // Red
'voter-contact': '#009688',                        // Teal
'fundraising': '#FFC107',                          // Amber
'movement-wide': '#607D8B',                        // Blue Gray
'research': '#795548',                             // Brown
```

---

## 🔄 Arrow Rendering (Xarrows)

```typescript
<Xarrow
  start={arrow.start}        // Source category ID
  end={arrow.end}            // Target category ID
  color="#000000"            // Black
  strokeWidth={3}            // 3px thick
  path="grid"                // Grid-based path (zigzag)
  showHead={true}            // Show arrowhead
  gridBreak="50%"            // Break point for grid path
/>
```

### Arrow Path:
- **Type**: Grid-based (creates zigzag connections)
- **Break Point**: 50% (turns at midpoint)
- **Color**: Pure black (#000000)
- **Width**: 3px

---

## 📊 Data Structure

### Entity Interface:
```typescript
interface Entity {
  category: string;          // Main category name
  subcategory: string;       // Subcategory within main category
  entityName: string;        // Company/tool name
  logoUrl?: string;          // Logo image URL
  websiteUrl?: string;       // Official website
  relevanceFlag: 'Y' | 'N';  // Filter flag
  linkedCategory?: string;   // Creates arrow to this category
}
```

### Example Entity with Connection:
```typescript
{
  category: 'Data Analytics & Modeling',
  subcategory: 'Voter Modeling & Targeting',
  entityName: 'TargetSmart',
  logoUrl: 'https://example.com/logo.png',
  websiteUrl: 'https://targetsmart.com',
  relevanceFlag: 'Y',
  linkedCategory: 'Voter Engagement'  // Arrow: Data Analytics → Voter Engagement
}
```

---

## 🖱️ Canvas View

### Pan/Drag Settings:
```typescript
panning={{ 
  disabled: false,           // Enable panning
  velocityDisabled: false,   // Enable momentum
  excluded: []               // No excluded elements
}}
```

### Zoom Settings:
```typescript
initialScale: 0.7,          // Start at 70% zoom
minScale: 0.3,              // Minimum 30% zoom
maxScale: 2,                // Maximum 200% zoom
wheel: { step: 0.1 }        // 10% zoom per scroll
```

---

## 🚀 Adding New Connections

To add a new arrow connection:

1. **Open** `src/data/entities.ts`
2. **Find** the entity you want to connect FROM
3. **Add** `linkedCategory: 'Target Category Name'`
4. **Save** - arrow will automatically appear

Example:
```typescript
{ 
  category: 'Fundraising',
  subcategory: 'Donor CRM',
  entityName: 'ActBlue',
  linkedCategory: 'Voter Engagement'  // ← Add this
}
```

Result: Arrow from Fundraising → Voter Engagement

---

## 🎨 Customizing Layout

### Change category order:
Edit `categoryOrder` array in `App.tsx`

### Change grid columns:
Edit `grid-cols-4` in `CategoryGrid.tsx`

### Change box width:
Edit `w-[360px]` in `CategoryGrid.tsx`

### Change gap between categories:
Edit `gap-3` in `renderCategoryGrid()` in `App.tsx`

---

## 📝 Notes

- **Duplicate Prevention**: The system automatically prevents duplicate arrows
- **Bidirectional**: To create two-way arrows, add `linkedCategory` to entities in BOTH categories
- **Multiple Connections**: One category can connect to multiple others (e.g., Fundraising → many categories)
- **Arrow Updates**: Arrows re-render automatically when data changes
