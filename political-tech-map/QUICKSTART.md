# 🚀 Quick Start Guide

## ✅ Your Application is Ready!

The Political Tech Landscape Map is now running at:
**http://localhost:5173/**

## 📂 Project Location

```
/Users/gowthamgaddam/Downloads/Applications/Ujwal/political-tech-map/
```

## 🎯 What You Have

✅ React + TypeScript application  
✅ TailwindCSS styling  
✅ Interactive category grid layout  
✅ Logo tiles with hover effects  
✅ Arrow connections between categories  
✅ Google Sheets integration ready  
✅ Sample data loaded  
✅ Responsive design  

## 🔥 Current Features

1. **Interactive Map**: Click on logos to visit company websites
2. **Tooltips**: Hover over logos to see full company names
3. **Categories**: 10 main categories with subcategories
4. **Visual Connections**: Arrows show relationships between categories
5. **Sample Data**: Pre-loaded with ~200+ political tech entities

## 📝 Next Steps

### Option 1: Use Sample Data (Current)
- The app is already running with sample data
- Browse through categories and test interactions
- Customize the sample data in `src/data/entities.ts`

### Option 2: Connect to Google Sheets

1. **Create Your Google Sheet**
   - Follow the template in `GOOGLE_SHEETS_GUIDE.md`
   - Add your columns: Category, Entity Name, Logo URL, etc.

2. **Get API Credentials**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Google Sheets API
   - Create an API key

3. **Update Configuration**
   Edit `src/data/entities.ts`:
   ```typescript
   const SHEET_ID = 'your-sheet-id-here';
   const API_KEY = 'your-api-key-here';
   const SHEET_NAME = 'Sheet1';
   ```

4. **Restart the Server**
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'tech-blue': '#1e3a8a',      // Category headers
  'tech-gray': '#f8f9fb',       // Background
  'tech-border': '#d0d8e0',     // Borders
}
```

### Reorder Categories
Edit `src/App.tsx`:
```typescript
const categoryOrder = [
  'Messaging & Media',
  'Your Custom Category',
  // ... add or reorder
];
```

### Adjust Logo Size
Edit `src/components/LogoTile.tsx`:
```typescript
className="max-h-12 max-w-full"  // Change max-h-12 to your size
```

## 🛠️ Development Commands

```bash
# Start dev server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Testing Responsive Design

1. Open http://localhost:5173/
2. Open browser DevTools (F12)
3. Toggle device toolbar
4. Test on different screen sizes:
   - Desktop: 1920x1080
   - Tablet: 768x1024
   - Mobile: 375x667

## 🐛 Troubleshooting

### Logos Not Showing?
- Check if Logo URL is publicly accessible
- Verify image URL format
- Try using Clearbit: `https://logo.clearbit.com/company.com`

### Categories Empty?
- Check Relevance Flag is "Y" in data
- Verify category name spelling
- Check browser console for errors (F12)

### Arrow Connections Not Showing?
- Make sure Linked Category field is filled
- Verify category names match exactly
- Check that both categories exist

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📖 Documentation

- **README.md**: Full project documentation
- **GOOGLE_SHEETS_GUIDE.md**: Complete Google Sheets setup
- **Source Code**: Well-commented TypeScript/React code

## 🎓 Project Structure

```
src/
├── components/
│   ├── CategoryGrid.tsx    # Main category box
│   └── LogoTile.tsx        # Individual logo tile
├── data/
│   └── entities.ts         # Data source & sample data
├── types/
│   └── index.ts           # TypeScript interfaces
├── App.tsx                # Main app component
└── main.tsx              # Entry point
```

## 💡 Tips

1. **Keep data organized**: Use consistent category names
2. **Logo quality**: Use high-res images (200x200px minimum)
3. **Test links**: Verify all website URLs work
4. **Mobile first**: Test on mobile devices
5. **Version control**: Use git to track changes

## 🚀 Deploy to Production

### Build the App
```bash
npm run build
```

### Deploy Options

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**:
1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy `dist` folder

## 📧 Need Help?

- Check the main README.md
- Review code comments
- Test with sample data first
- Check browser console for errors

## 🎉 You're All Set!

Your Political Tech Landscape Map is ready to use. The dev server is running at http://localhost:5173/

Happy mapping! 🗺️
