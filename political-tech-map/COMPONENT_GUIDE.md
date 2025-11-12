# Visual Component Guide

## 🎨 Component Hierarchy

```
App.tsx
│
├── Header
│   └── Title + Description
│
├── CategoryGrid (multiple)
│   ├── Category Header
│   │   └── Category Name
│   │
│   └── Subcategories (optional)
│       ├── Subcategory Title
│       └── LogoTile Grid
│           └── LogoTile (multiple)
│               ├── Logo Image / Text Fallback
│               └── Tooltip (on hover)
│
└── ConnectionArrows
    └── Xarrow (multiple)

└── Footer
```

## 📦 Component Breakdown

### 1. App Component (`src/App.tsx`)

**Purpose**: Main container, data fetching, layout orchestration

**Structure**:
```tsx
<div className="bg-tech-gray min-h-screen">
  <header>Title</header>
  
  <div className="category-grid">
    {categories.map(category => 
      <CategoryGrid />
    )}
  </div>
  
  <ConnectionArrows />
  
  <footer>Legend</footer>
</div>
```

**Responsibilities**:
- Fetch/filter data
- Group entities by category
- Calculate arrow connections
- Render category grids

---

### 2. CategoryGrid Component

**File**: `src/components/CategoryGrid.tsx`

**Props**:
```typescript
{
  categoryId: string;      // For arrow anchoring
  categoryData: {
    category: string;
    entities: Entity[];
    subcategories?: { [key: string]: Entity[] };
  }
}
```

**Visual Structure**:
```
┌─────────────────────────────────┐
│  CATEGORY NAME                  │ ← Blue gradient header
├─────────────────────────────────┤
│  Subcategory 1                  │ ← Optional subcategory
│  ┌─────┐  ┌─────┐              │
│  │Logo │  │Logo │              │ ← 2-column grid
│  └─────┘  └─────┘              │
│                                 │
│  Subcategory 2                  │
│  ┌─────┐  ┌─────┐  ┌─────┐    │
│  │Logo │  │Logo │  │Logo │    │
│  └─────┘  └─────┘  └─────┘    │
└─────────────────────────────────┘
```

**Styling**:
- Background: White
- Border: 1px solid #d0d8e0
- Rounded: 8px
- Shadow: md
- Max width: 400px
- Min width: 280px

---

### 3. LogoTile Component

**File**: `src/components/LogoTile.tsx`

**Props**:
```typescript
{
  entity: {
    entityName: string;
    logoUrl?: string;
    websiteUrl?: string;
  }
}
```

**Visual States**:

**Default State**:
```
┌──────────────┐
│              │
│   [LOGO]     │  ← Image or text
│              │
└──────────────┘
```

**Hover State**:
```
     ┌──────────────┐
     │ Company Name │  ← Tooltip
     └──────┬───────┘
           ▼
┌──────────────┐
│   ╔═══════╗  │
│   ║ LOGO  ║  │  ← Scaled 1.05x + blue glow
│   ╚═══════╝  │
└──────────────┘
```

**Click**: Opens `websiteUrl` in new tab

**Styling**:
- Background: White
- Border: 1px solid #d0d8e0
- Rounded: 6px
- Padding: 12px
- Height: 64px
- Shadow: sm
- Transition: all 200ms

**Hover Effects**:
```css
transform: scale(1.05)
box-shadow: 0 4px 6px rgba(0,0,0,0.1)
border-color: #60a5fa
```

---

### 4. ConnectionArrows Component

**File**: `src/components/ConnectionArrows.tsx`

**Props**:
```typescript
{
  arrows: Array<{
    start: string;  // Category ID
    end: string;    // Linked category ID
  }>
}
```

**Visual Example**:
```
Category A ────────────────────> Category B
          ↖                    ↗
           ↖                  ↗
            ↖                ↗
             Category C
```

**Styling**:
- Color: #60a5fa (blue-400)
- Width: 2px
- Head size: 6px
- Path: smooth curve
- Curveness: 0.8

---

## 🎨 Styling System

### Color Palette

```typescript
// Primary Colors
'tech-blue': '#1e3a8a'      // Category headers
'tech-gray': '#f8f9fb'       // Page background
'tech-border': '#d0d8e0'     // Card borders

// Interactive States
'blue-400': '#60a5fa'        // Arrows, hover glow
'gray-700': '#374151'        // Text
'gray-900': '#111827'        // Tooltips

// Gradients
from-blue-900 to-blue-800    // Header gradient
```

### Typography

```css
/* Headers */
font-family: 'Inter', sans-serif
font-weight: 700
font-size: 0.875rem (14px)
text-transform: uppercase
letter-spacing: 0.05em

/* Subcategory Headers */
font-weight: 600
font-size: 0.75rem (12px)
color: #374151

/* Entity Names */
font-weight: 500
font-size: 0.75rem (12px)
color: #374151
```

### Spacing

```css
/* Container */
padding: 2rem (32px)

/* Category Grid Gap */
gap: 1.5rem (24px)

/* Category Card Padding */
padding: 1rem (16px)

/* Logo Tile Padding */
padding: 0.75rem (12px)

/* Grid Gaps */
gap: 0.5rem (8px)
```

### Shadows

```css
/* Category Cards */
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)

/* Logo Tiles */
box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)

/* Hover State */
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)

/* Tooltips */
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
```

---

## 📐 Layout Grid

### Desktop (1920px+)
```
┌────────────────────────────────────────┐
│  [Category] [Category] [Category]      │
│  [Category] [Category] [Category]      │
│  [Category] [Category] [Category]      │
└────────────────────────────────────────┘
```
- 3-4 categories per row
- Flex wrap
- Center aligned

### Tablet (768px - 1919px)
```
┌────────────────────────────┐
│  [Category] [Category]     │
│  [Category] [Category]     │
└────────────────────────────┘
```
- 2 categories per row
- Flex wrap
- Center aligned

### Mobile (< 768px)
```
┌──────────────┐
│  [Category]  │
│  [Category]  │
│  [Category]  │
└──────────────┘
```
- 1 category per row
- Full width
- Stacked vertically

---

## 🎯 Interaction States

### Logo Tile States

1. **Default**
   - Border: #d0d8e0
   - Scale: 1
   - Cursor: default

2. **Has Website (Clickable)**
   - Cursor: pointer

3. **Hover**
   - Scale: 1.05
   - Border: #60a5fa
   - Shadow: elevated
   - Tooltip: visible

4. **Active (Click)**
   - Opens new tab
   - No visual change

### Tooltip Behavior

**Trigger**: Mouse enter logo tile  
**Position**: Above logo tile, centered  
**Delay**: None (immediate)  
**Hide**: Mouse leave  
**Content**: Full entity name  

**Visual**:
```
   ┌──────────────────┐
   │  Company Name    │  ← Black bg, white text
   └────────┬─────────┘
           ▼ triangle
      ┌─────────┐
      │  LOGO   │
      └─────────┘
```

---

## 🔄 Data Flow

```
App.tsx
  │
  ├─> fetchData() / sampleEntities
  │
  ├─> filter(relevanceFlag === 'Y')
  │
  ├─> groupByCategory()
  │     │
  │     └─> Map<category, CategoryData>
  │
  ├─> calculateArrows()
  │     │
  │     └─> Array<{start, end}>
  │
  └─> render()
        │
        ├─> CategoryGrid (for each category)
        │     │
        │     └─> LogoTile (for each entity)
        │           │
        │           ├─> show image if logoUrl
        │           ├─> show text if no logo
        │           └─> tooltip on hover
        │
        └─> ConnectionArrows
              └─> Xarrow (for each connection)
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Base (Mobile) */
.category-grid {
  flex-direction: column;
  align-items: stretch;
}

/* Tablet */
@media (min-width: 768px) {
  .category-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .logo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large Desktop */
@media (min-width: 1920px) {
  .category-grid {
    max-width: 1800px;
    margin: 0 auto;
  }
}
```

---

## 🎨 Animation Details

### Logo Hover Animation

```css
transition: all 200ms ease-in-out

/* Hover state */
transform: scale(1.05)
box-shadow: 0 4px 6px rgba(0,0,0,0.1)
border-color: #60a5fa
```

### Tooltip Animation

No animation - instant show/hide for better UX

### Arrow Drawing

Smooth path with bezier curve:
- Curveness: 0.8
- Automatically routes around obstacles
- Updates on window resize

---

## 🔍 Accessibility Features

### Keyboard Navigation
- Clickable logos are keyboard accessible
- Tab to navigate between logos
- Enter to activate links

### Screen Readers
- Alt text on images
- Semantic HTML structure
- ARIA labels where needed

### Color Contrast
- WCAG AA compliant
- Blue text on white: 4.5:1
- White text on blue: 7:1

---

## 💡 Best Practices Used

1. **Component Composition**: Small, reusable components
2. **TypeScript**: Full type safety
3. **CSS-in-JS**: TailwindCSS utility classes
4. **Responsive Design**: Mobile-first approach
5. **Performance**: Lazy loading potential
6. **Accessibility**: Semantic HTML, keyboard nav
7. **User Experience**: Instant feedback, clear hierarchy

---

## 🛠️ Customization Examples

### Change Logo Size
```tsx
// src/components/LogoTile.tsx
<div className="h-20 w-full">  {/* Was h-16 */}
  <img className="max-h-16" />  {/* Was max-h-12 */}
</div>
```

### Change Grid Columns
```tsx
// src/components/CategoryGrid.tsx
<div className="grid grid-cols-3 gap-2">  {/* Was grid-cols-2 */}
```

### Change Header Color
```tsx
// src/components/CategoryGrid.tsx
<div className="bg-gradient-to-r from-purple-900 to-purple-800">
  {/* Was from-blue-900 to-blue-800 */}
</div>
```

### Add Loading State
```tsx
// src/App.tsx
const [loading, setLoading] = useState(true);

if (loading) {
  return <div>Loading...</div>;
}
```

---

Ready to customize? Start with simple color changes, then move to layout modifications! 🎨
