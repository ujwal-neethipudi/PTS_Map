# Political Tech Landscape Map

A comprehensive, interactive visualization of the political technology ecosystem, built with React, TypeScript, and TailwindCSS.

## 🎯 Features

- **Dynamic Data Integration**: Pulls data from Google Sheets API or uses local JSON fallback
- **Interactive Visualization**: Hover effects, tooltips, and clickable logos
- **Category-Based Layout**: Organized by functional areas (Messaging & Media, Voter Engagement, Fundraising, etc.)
- **Visual Connections**: Arrows showing relationships between categories using react-xarrows
- **Responsive Design**: Mobile-friendly layout with adaptive grid
- **Modern UI**: Clean, professional design matching the Political Tech Summit infographic style

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd political-tech-map
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📊 Data Integration

### Google Sheets Setup

1. Create a Google Sheet with the following columns:
   - **Category**: Main category (e.g., "Messaging & Media")
   - **Subcategory**: Sub-category (e.g., "Creative Asset Development")
   - **Entity Name**: Company/tool name
   - **Logo URL**: Link to company logo image
   - **Website URL**: Company website
   - **Linked Category**: Category to connect with arrows
   - **Relevance Flag**: "Y" or "N" to filter entities

2. Make the sheet publicly accessible or enable API access

3. Update the configuration in `src/data/entities.ts`:
   ```typescript
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
   const API_KEY = 'YOUR_GOOGLE_API_KEY';
   const SHEET_NAME = 'Sheet1';
   ```

4. Get a Google Sheets API key:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google Sheets API
   - Create credentials (API Key)

### Using Sample Data

The application includes sample data in `src/data/entities.ts` that will be used as fallback if Google Sheets API is not configured.

## 🎨 Customization

### Styling

The design uses TailwindCSS with custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  'tech-blue': '#1e3a8a',
  'tech-gray': '#f8f9fb',
  'tech-border': '#d0d8e0',
}
```

### Category Order

Modify the category order in `src/App.tsx`:

```typescript
const categoryOrder = [
  'Messaging & Media',
  'Paid Media',
  'Owned Media / Digital Content',
  // ... add or reorder as needed
];
```

### Logo Display

- Logos are displayed at max 60x60px
- If logo URL is missing or fails to load, entity name is displayed as text
- Hover shows tooltip with full entity name
- Click opens entity website in new tab

## 📁 Project Structure

```
political-tech-map/
├── src/
│   ├── components/
│   │   ├── CategoryGrid.tsx    # Category box with subcategories
│   │   └── LogoTile.tsx        # Individual logo tile component
│   ├── data/
│   │   └── entities.ts         # Data fetching and sample data
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🛠️ Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server
- **react-xarrows**: Arrow connections between elements
- **Google Sheets API**: Dynamic data source

## 🔧 Configuration Files

- `vite.config.ts`: Vite configuration
- `tailwind.config.js`: TailwindCSS theme customization
- `tsconfig.json`: TypeScript compiler options
- `postcss.config.js`: PostCSS plugins

## 📝 Adding New Categories

1. Add entities to your Google Sheet with the new category name
2. The application will automatically create a new category box
3. Add the category to `categoryOrder` in `App.tsx` to control its position

## 🎯 Key Components

### CategoryGrid
Renders a category box with:
- Category header with gradient background
- Subcategory sections (if present)
- Grid of logo tiles
- Border and shadow styling

### LogoTile
Individual entity display with:
- Logo image or text fallback
- Hover tooltip
- Click-to-visit website
- Scale animation on hover

### App
Main component that:
- Fetches and filters data
- Groups entities by category
- Creates arrow connections
- Renders the complete layout

## 🚧 Future Enhancements

- [ ] Search and filter functionality
- [ ] Export to PDF/image
- [ ] Admin panel for data management
- [ ] Real-time data synchronization
- [ ] Dark mode support
- [ ] Category collapse/expand
- [ ] Advanced filtering by tags

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and TailwindCSS
