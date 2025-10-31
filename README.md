# Clay ID Extractor

A simple Chrome extension to extract Workspace ID and Table ID from Clay URLs.

## 🎯 What it does

When you're on a Clay table page, this extension extracts:
- **Workspace ID** - from the URL
- **Table ID** - from the URL

Perfect for API development, documentation, and troubleshooting.

## 📦 Installation

1. Download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the downloaded folder
6. Done! The extension icon will appear in your Chrome toolbar

## 💡 How to Use

1. Navigate to any Clay table (URL should look like: `https://app.clay.com/workspaces/.../tables/...`)
2. Click the extension icon in your toolbar
3. View the extracted Workspace ID and Table ID
4. Click **"Copy"** to copy each ID to your clipboard

## 📋 Use Cases

- **API Integration**: Quickly copy IDs for Clay API calls
- **Support**: Reference exact workspace and table IDs when helping users
- **Documentation**: Record table references for your team
- **Development**: Test API endpoints with current table data

## 🔐 Privacy

- ✅ No data is stored or transmitted
- ✅ Only reads the current tab's URL
- ✅ Works locally in your browser
- ✅ No external API calls

## 📁 Files

- `manifest.json` - Extension configuration
- `clay-table-extractor.html` - Popup UI
- `popup.js` - ID extraction logic
- `icon.png` - Extension icon

---

Made for Clay users 🚀
