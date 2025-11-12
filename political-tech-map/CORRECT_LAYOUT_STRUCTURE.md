# Political Tech Landscape Map - CORRECT Layout Structure

## 📐 Actual Grid Structure (from reference image)

The layout is **NOT** a simple horizontal flow. It's a **complex multi-row grid** with:
- **3 main horizontal rows**
- **Variable height boxes**
- **Nested subcategories**
- **Zigzag arrow connectors**

---

## 🗂️ Actual Layout Structure

```
ROW 1 (TOP SECTION):
┌────────────────────────────────────────────────────────────────────────────────┬──────────────┐
│                        MESSAGING & MEDIA                                       │  MOVEMENT-   │
│                        [Cyan header bar]                                       │    WIDE      │
├────────────────────────┬────────────────────────┬──────────────────────────────┤  [Sidebar]   │
│   PAID MEDIA           │  CONTENT TESTING &     │  OWNED MEDIA / DIGITAL       │              │
│   [Blue header]        │  OPTIMIZATION          │  CONTENT [Green header]      │  - Info      │
│                        │  [Light section]       │                              │    Integrity │
│ • TV Targeting         │                        │  • Social Networks           │  - Electoral │
│ • Digital Ad Targeting │  [Connected with       │  • Website & Blog            │    Admin     │
│ • TV Buying            │   zigzag arrows]       │  • Email & Direct Messaging  │  - Internal  │
│ • Influencer Marketing │                        │                              │    Comms     │
└────────────────────────┴────────────────────────┴──────────────────────────────┤  - Campaign  │
                                                                                  │    Strategy  │
ROW 2 (MIDDLE SECTION):                                                          │              │
┌────────────────────────┬────────────────────────┬──────────────────────────────┬──────────────┤
│  DATA ANALYTICS &      │    VOTER               │  VOLUNTEER & ACTIVIST        │  FUNDRAISING │
│  MODELING              │    ENGAGEMENT          │  MOBILIZATION                │              │
│  [Purple/Dark header]  │  [Dark Navy header]    │  [Dark Navy header]          │  [Dark Navy] │
│                        │                        │                              │              │
│ • Data Sources         │ • Voter & Volunteer    │ • Volunteer Analytics        │ • Donor CRM  │
│ • Data Aggregation &   │   CRM                  │ • Volunteer Management       │ • Donation   │
│   Mapping              │ • Voter Modeling &     │                              │   Portals    │
│                        │   Targeting            │                              │ • Analytics  │
│                        │                        │                              │ • Process    │
│                        │                        │                              │ • Experience │
│                        │                        │                              │ • Payment    │
│                        │                        │                              │ • Compliance │
└────────────────────────┴────────────────────────┴──────────────────────────────┴──────────────┘

ROW 3 (BOTTOM SECTION):
┌────────────────────────┬──────────────────────────────────────────────────────────────────────┐
│    RESEARCH            │                      VOTER CONTACT                                   │
│    [Dark header]       │                      [Dark Navy header]                              │
│                        │                                                                      │
│ • Polling              │  ┌───────────────────┬──────────────────┬─────────────────────────┐ │
│ • Social Listening &   │  │ Voter Education   │ Volunteer Deploy │                         │ │
│   Sentiment Research   │  └───────────────────┴──────────────────┘                         │ │
│ • Opposition Research  │                                                                      │
│   & Media Monitoring   │  ┌─────────────────────────────────────────────────────────────┐   │
│ • Policy Research &    │  │                    FIELD TOOLS                               │   │
│   Legislative Tracking │  │  [Nested dark section with 8 subsections]                   │   │
│                        │  │                                                              │   │
│                        │  │  ┌──────────┬──────────┬──────────┬──────────┐              │   │
│                        │  │  │ Mobile   │Grassroots│  Dialer  │Peer-to-  │              │   │
│                        │  │  │Canvassing│  Action  │  Tools   │Peer Text │              │   │
│                        │  │  └──────────┴──────────┴──────────┴──────────┘              │   │
│                        │  │  ┌──────────┬──────────┬──────────┬──────────┐              │   │
│                        │  │  │Mapping/  │  Events  │Broadcast │Relational│              │   │
│                        │  │  │Turf Cut  │          │Messaging │Organizing│              │   │
│                        │  │  └──────────┴──────────┴──────────┴──────────┘              │   │
│                        │  └─────────────────────────────────────────────────────────────┘   │
└────────────────────────┴──────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Key Visual Elements from Reference

### **1. Category Header Styles:**
- **Messaging & Media**: Cyan filled header bar (#00BCD4)
- **Paid Media**: Light blue filled (#2196F3)
- **Owned Media/Digital Content**: Light green filled (#4CAF50)
- **Data Analytics & Modeling**: Dark purple/navy filled
- **Voter Engagement**: Dark navy filled
- **Volunteer & Activist**: Dark navy filled
- **Voter Contact**: Dark navy filled
- **Fundraising**: Dark navy filled
- **Research**: Dark gray filled
- **Movement-Wide**: Sidebar with sections

### **2. Border Colors:**
- **Top row (Messaging, Paid, Owned)**: Cyan/light blue borders
- **Middle row**: Dark navy/purple borders
- **Bottom row**: Dark navy borders
- **Zigzag connectors**: Teal/cyan chevron arrows

### **3. Layout Grid:**

```css
/* Actual structure needs CSS Grid, not Flexbox */

.layout-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 200px; /* 4 main cols + sidebar */
  grid-template-rows: auto auto auto;
  gap: 0;
}

/* Row 1 - Messaging spans full width */
.messaging-media {
  grid-column: 1 / 5;
  grid-row: 1;
}

/* Paid, Content Testing, Owned in same row */
.paid-media {
  grid-column: 1 / 2;
  grid-row: 2;
}

.content-testing {
  grid-column: 2 / 3;
  grid-row: 2;
}

.owned-media {
  grid-column: 3 / 5;
  grid-row: 2;
}

/* Movement-Wide sidebar */
.movement-wide {
  grid-column: 5;
  grid-row: 1 / 4; /* Spans all rows */
}

/* Row 2 */
.data-analytics {
  grid-column: 1;
  grid-row: 3;
}

.voter-engagement {
  grid-column: 2;
  grid-row: 3;
}

.volunteer-activist {
  grid-column: 3;
  grid-row: 3;
}

.fundraising {
  grid-column: 4;
  grid-row: 3;
}

/* Row 3 */
.research {
  grid-column: 1;
  grid-row: 4;
}

.voter-contact {
  grid-column: 2 / 5;
  grid-row: 4;
}
```

---

## 📊 Correct Category Arrangement

### **Top Row:**
1. **Messaging & Media** (full width span)
   - Subcategories: Creative Asset Dev, Message Dev, Content Testing
2. **Paid Media** (below left)
3. **Content Testing & Optimization** (below center) - lighter section
4. **Owned Media / Digital Content** (below right)

### **Middle Row:**
5. **Data Analytics & Modeling**
6. **Voter Engagement**
7. **Volunteer & Activist Mobilization**
8. **Fundraising**

### **Bottom Row:**
9. **Research**
10. **Voter Contact** (spans multiple columns)
    - Contains nested **Field Tools** section (8 subsections)

### **Sidebar (Right):**
11. **Movement-Wide**
    - Information Integrity
    - Electoral Admin & Voter Resources
    - Internal Comms & Productivity
    - Campaign Strategy & Management

---

## 🔗 Arrow/Connector Pattern

Looking at the reference, the arrows are:
- **Teal/cyan chevron shapes** (>>>) not simple lines
- **Positioned between major sections**
- **Connect logical flow:**
  - Messaging → Paid Media
  - Paid Media → Owned Media
  - Data Analytics ↔ Voter Engagement
  - Voter Engagement → Volunteer & Activist
  - Multiple sections → Fundraising

---

## 🎯 Implementation Strategy

To match the reference, we need to:

### **1. Switch from Flexbox to CSS Grid**
```tsx
<div className="grid grid-cols-5 gap-0">
  {/* Categories with specific grid placement */}
</div>
```

### **2. Add Dark Header Backgrounds**
```tsx
<div className="bg-[#1a365d] text-white"> {/* Dark navy */}
  <h2>Category Name</h2>
</div>
```

### **3. Create Nested Field Tools Section**
```tsx
<div className="voter-contact">
  <div className="field-tools bg-[#1a365d]">
    <div className="grid grid-cols-4 gap-2">
      {/* 8 subsections */}
    </div>
  </div>
</div>
```

### **4. Add Chevron Arrow Connectors**
```tsx
<div className="chevron-arrow">
  <svg>
    {/* Teal >>> chevron */}
  </svg>
</div>
```

### **5. Update Category Grid Component**
- Different header background colors per category
- Variable heights
- Proper grid positioning
- No gaps between adjacent boxes

---

## 🚨 Major Changes Needed

1. **Replace horizontal flex with CSS Grid**
2. **Add dark header backgrounds** (not just top stripes)
3. **Create complex nested layout** for Voter Contact/Field Tools
4. **Add chevron arrow connectors** (not Xarrow lines)
5. **Implement proper grid column spanning**
6. **Add Movement-Wide as full-height sidebar**
7. **Update color scheme** (darker headers, lighter borders)

---

This is the CORRECT structure from the reference image!
