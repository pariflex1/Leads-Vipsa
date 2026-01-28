# Lead Pro Dashboard - PWA Edition

A Progressive Web App (PWA) for managing leads with real-time notifications when new leads are added to Google Sheets.

## 🎯 New Features

### ✅ Completed Changes:
1. **Inline Layout** - City, Status, and Project displayed in a single row
2. **Contact Display** - Phone number prominently shown on each card
3. **PWA Ready** - Install as a mobile/desktop app
4. **Push Notifications** - Get notified when new leads are added
5. **Offline Support** - Works without internet (cached data)

## 📱 PWA Installation

### On Mobile (Android/iOS):
1. Open the website in Chrome/Safari
2. Tap the menu (⋮) or share button
3. Select "Add to Home Screen" or "Install App"
4. The app icon will appear on your home screen

### On Desktop:
1. Open in Chrome/Edge
2. Click the install icon (⊕) in the address bar
3. Click "Install"

## 🔔 Notification System

### How It Works:
1. **Click the Bell Icon** (🔔) in the top right to enable notifications
2. The app checks Google Sheets every **30 seconds** for new leads
3. When a new row is added, you'll receive a push notification with:
   - Lead name
   - City
   - Project name
   - Vibration pattern

### Setup Requirements:

#### For the notification system to work:
1. **Browser Permissions**: Allow notifications when prompted
2. **Keep App Open**: App must be open (in background is OK) to check for new leads
3. **Internet Connection**: Required to check Google Sheets

### Notification Features:
- ✅ Real-time alerts (checks every 30 seconds)
- ✅ Works even when browser is minimized
- ✅ Shows lead details in notification
- ✅ Vibration pattern on mobile
- ✅ Auto-refreshes lead list when new leads arrive

## 📋 Files Included

1. **index.html** - Main application
2. **manifest.json** - PWA configuration
3. **service-worker.js** - Offline caching & notifications
4. **icon-svg.html** - Tool to generate app icons
5. **README.md** - This file

## 🚀 Deployment Steps

### Option 1: Simple Hosting
1. Upload all files to your web server
2. Generate icons using `icon-svg.html`:
   - Open `icon-svg.html` in browser
   - Download `icon-192.png` and `icon-512.png`
   - Upload icons to server root
3. Access via HTTPS (required for PWA)

### Option 2: GitHub Pages
```bash
# Create repo and upload files
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
# Access at: https://username.github.io/repo-name/
```

### Option 3: Netlify/Vercel
1. Drag & drop all files to Netlify/Vercel
2. Automatic deployment with HTTPS
3. Done!

## ⚙️ Configuration

### Adjust Notification Check Interval:
Edit in `index.html`:
```javascript
const CHECK_INTERVAL = 30000; // 30 seconds (in milliseconds)
```

Options:
- `15000` = 15 seconds (more frequent)
- `60000` = 1 minute (less frequent)
- `300000` = 5 minutes (minimal)

### Customize Notification Sound:
Currently uses default system notification sound. To add custom sound:
1. Add audio file to project
2. Modify service-worker.js notification options:
```javascript
const options = {
  // ... existing options
  sound: '/notification-sound.mp3'
};
```

## 🔐 Security Notes

⚠️ **IMPORTANT**: The Google Sheets API key is exposed in client-side code. For production:

1. **Use a backend proxy** to hide the API key
2. **Restrict API key** to specific domains in Google Cloud Console
3. **Set Sheet permissions** to "Anyone with link can view"
4. **Consider OAuth** for better security

## 📊 Google Sheets Structure

Required sheets:
- **Users** (columns: Username, PIN, DisplayName)
- **Leads** (columns A-P as defined in code)

## 🐛 Troubleshooting

### Notifications Not Working:
1. Check browser supports notifications (Chrome, Firefox, Edge)
2. Verify notification permission is granted
3. Ensure HTTPS is enabled (required for PWA)
4. Check console for errors
5. Make sure app is not in "Do Not Disturb" mode

### PWA Won't Install:
1. Must be served over HTTPS
2. Check manifest.json is accessible
3. Icons must be present (192x192 and 512x512)
4. Service worker must register successfully

### Icons Not Showing:
1. Generate icons using `icon-svg.html`
2. Place in root directory
3. Clear browser cache
4. Reinstall PWA

## 🎨 Customization

### Change App Colors:
Edit in `index.html`:
```javascript
<meta name="theme-color" content="#0f172a">
```

### Modify Card Layout:
Search for `renderGrid` function in `index.html` and adjust HTML/Tailwind classes.

## 📱 Testing Notifications

1. Enable notifications (click bell icon)
2. Open Google Sheets
3. Add a new row to the Leads sheet
4. Wait up to 30 seconds
5. You should receive a notification!

## 🔄 Updates & Maintenance

To update the app:
1. Modify files
2. Change `CACHE_NAME` in service-worker.js (e.g., 'lead-pro-v2')
3. Users will automatically get the update on next visit

## 📞 Support

If notifications aren't working:
- Check browser console for errors
- Verify Google Sheets API is accessible
- Ensure app has notification permissions
- Try on a different device/browser

## 🎉 Features Summary

| Feature | Status |
|---------|--------|
| PWA Installation | ✅ |
| Offline Mode | ✅ |
| Push Notifications | ✅ |
| Contact Display | ✅ |
| Inline Layout | ✅ |
| Auto Background Check | ✅ |
| Vibration Support | ✅ |
| Multi-device Sync | ✅ |

---

**Note**: For best notification experience, keep the app open in a browser tab or installed as PWA. Notifications work even when minimized!
