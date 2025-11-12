/**
 * POLITICAL TECH LANDSCAPE MAP - CONNECTION EXAMPLES
 * 
 * This file shows concrete examples of how arrows connect categories
 * based on the linkedCategory field in entities.ts
 */

// ============================================================================
// EXAMPLE 1: Simple One-Way Connection
// ============================================================================

// Entity in entities.ts:
{
  category: 'Messaging & Media',
  subcategory: 'Content Testing & Optimization',
  entityName: 'GROUND',
  linkedCategory: 'Paid Media'  // ← Creates arrow
}

// Result:
// [Messaging & Media] ────────→ [Paid Media]


// ============================================================================
// EXAMPLE 2: Multiple Entities Creating Same Connection
// ============================================================================

// Entity 1:
{
  category: 'Data Analytics & Modeling',
  subcategory: 'Data Sources',
  entityName: 'TargetSmart',
  linkedCategory: 'Voter Engagement'
}

// Entity 2:
{
  category: 'Data Analytics & Modeling',
  subcategory: 'Voter Modeling',
  entityName: 'Catalist',
  linkedCategory: 'Voter Engagement'
}

// Result (only ONE arrow, duplicates prevented):
// [Data Analytics & Modeling] ────────→ [Voter Engagement]


// ============================================================================
// EXAMPLE 3: Category Connecting to Multiple Categories
// ============================================================================

// Fundraising connects to multiple categories:
{
  category: 'Fundraising',
  subcategory: 'Donor CRM',
  entityName: 'ActBlue',
  linkedCategory: 'Voter Engagement'
}

{
  category: 'Fundraising',
  subcategory: 'Donor CRM',
  entityName: 'NGP VAN',
  linkedCategory: 'Volunteer & Activist Mobilization'
}

{
  category: 'Fundraising',
  subcategory: 'Payment Processing',
  entityName: 'Stripe',
  linkedCategory: 'Owned Media / Digital Content'
}

// Result:
//                    ┌─→ [Voter Engagement]
//                    │
// [Fundraising] ─────┼─→ [Volunteer & Activist Mobilization]
//                    │
//                    └─→ [Owned Media / Digital Content]


// ============================================================================
// EXAMPLE 4: Bidirectional Connection
// ============================================================================

// Entity in Category A:
{
  category: 'Data Analytics & Modeling',
  entityName: 'Tool A',
  linkedCategory: 'Voter Engagement'
}

// Entity in Category B:
{
  category: 'Voter Engagement',
  entityName: 'Tool B',
  linkedCategory: 'Data Analytics & Modeling'
}

// Result (TWO separate arrows):
//                    ┌─────────────────┐
//                    ↓                 ↑
// [Data Analytics] ←─────────────────→ [Voter Engagement]


// ============================================================================
// EXAMPLE 5: Complete Campaign Flow
// ============================================================================

/*
STEP 1: Create messaging
{
  category: 'Messaging & Media',
  entityName: 'Message Testing Tool',
  linkedCategory: 'Paid Media'
}

STEP 2: Run ads
{
  category: 'Paid Media',
  entityName: 'Ad Platform',
  linkedCategory: 'Voter Engagement'
}

STEP 3: Engage voters
{
  category: 'Voter Engagement',
  entityName: 'Engagement Platform',
  linkedCategory: 'Volunteer & Activist Mobilization'
}

STEP 4: Mobilize volunteers
{
  category: 'Volunteer & Activist Mobilization',
  entityName: 'Organizing Tool',
  linkedCategory: 'Voter Contact'
}

STEP 5: Contact voters directly
{
  category: 'Voter Contact',
  entityName: 'Phone Banking Tool',
  linkedCategory: 'Fundraising'  // Fundraising drives it all
}

VISUAL FLOW:
[Messaging & Media]
        ↓
   [Paid Media]
        ↓
[Voter Engagement]
        ↓
[Volunteer & Activist Mobilization]
        ↓
 [Voter Contact]
        ↓
  [Fundraising] ──→ (loops back to multiple categories)
*/


// ============================================================================
// ARROW ID GENERATION
// ============================================================================

// Category Name → Arrow ID conversion:
"Messaging & Media"                     → "messaging-&-media"
"Paid Media"                            → "paid-media"
"Owned Media / Digital Content"         → "owned-media-/-digital-content"
"Data Analytics & Modeling"             → "data-analytics-&-modeling"
"Voter Engagement"                      → "voter-engagement"
"Volunteer & Activist Mobilization"     → "volunteer-&-activist-mobilization"
"Voter Contact"                         → "voter-contact"
"Fundraising"                           → "fundraising"
"Movement-Wide"                         → "movement-wide"
"Research"                              → "research"

// Conversion logic (in App.tsx):
const categoryId = category.replace(/\s+/g, '-').toLowerCase();


// ============================================================================
// HOW TO ADD A NEW CONNECTION
// ============================================================================

/*
1. Open: src/data/entities.ts

2. Find your entity (or add a new one)

3. Add linkedCategory field:
*/

{
  category: 'Your Source Category',
  subcategory: 'Your Subcategory',
  entityName: 'Your Tool Name',
  logoUrl: 'https://example.com/logo.png',
  websiteUrl: 'https://example.com',
  relevanceFlag: 'Y',
  linkedCategory: 'Your Target Category'  // ← ADD THIS LINE
}

/*
4. Save the file

5. Arrow appears automatically!
*/


// ============================================================================
// DEBUGGING CONNECTIONS
// ============================================================================

/*
If an arrow doesn't appear:

1. Check category name spelling (must match EXACTLY):
   ✅ 'Data Analytics & Modeling'
   ❌ 'Data Analytics and Modeling'
   ❌ 'data analytics & modeling'

2. Check relevanceFlag is 'Y':
   ✅ relevanceFlag: 'Y'
   ❌ relevanceFlag: 'N'

3. Check both categories exist in categoryOrder array (App.tsx)

4. Open browser console and check for arrow rendering errors

5. Verify IDs in DOM:
   - Right click category box → Inspect
   - Look for id="category-name" attribute
   - Example: id="data-analytics-&-modeling"
*/


// ============================================================================
// ADVANCED: CUSTOM CONNECTION LOGIC
// ============================================================================

/*
Current logic (App.tsx lines 20-38):

arrows = entities
  .filter(entity => entity.linkedCategory exists)
  .map(entity => ({
    start: entity.category (converted to ID),
    end: entity.linkedCategory (converted to ID)
  }))
  .removeDuplicates()

To customize:
1. Modify the arrow creation logic in useEffect
2. Add conditions like:
   - Only connect certain subcategories
   - Create conditional connections based on entity properties
   - Generate multiple arrows per entity
*/
