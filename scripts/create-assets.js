const fs = require('fs');
const path = require('path');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

// SVG content for placeholder images
const iconSVG = `<svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" fill="#007AFF"/>
  <circle cx="512" cy="400" r="200" fill="white"/>
  <rect x="312" y="600" width="400" height="300" rx="20" fill="white"/>
  <rect x="362" y="700" width="300" height="20" rx="10" fill="#007AFF"/>
  <rect x="362" y="750" width="200" height="20" rx="10" fill="#007AFF"/>
  <rect x="362" y="800" width="250" height="20" rx="10" fill="#007AFF"/>
</svg>`;

const splashSVG = `<svg width="1242" height="2436" xmlns="http://www.w3.org/2000/svg">
  <rect width="1242" height="2436" fill="#000000"/>
  <text x="621" y="1218" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">Weekend</text>
  <text x="621" y="1318" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">Calendar</text>
</svg>`;

const adaptiveIconSVG = `<svg width="108" height="108" xmlns="http://www.w3.org/2000/svg">
  <circle cx="54" cy="40" r="20" fill="white"/>
  <rect x="34" y="60" width="40" height="30" rx="2" fill="white"/>
</svg>`;

const faviconSVG = `<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="#007AFF"/>
  <circle cx="24" cy="18" r="8" fill="white"/>
  <rect x="14" y="28" width="20" height="14" rx="2" fill="white"/>
</svg>`;

// Create placeholder files
const files = [
  { name: 'icon.png', content: iconSVG },
  { name: 'splash.png', content: splashSVG },
  { name: 'adaptive-icon.png', content: adaptiveIconSVG },
  { name: 'favicon.png', content: faviconSVG }
];

files.forEach(file => {
  const filePath = path.join(assetsDir, file.name);
  // For now, just create empty files. In a real scenario, you'd convert SVG to PNG
  fs.writeFileSync(filePath, '');
  console.log(`Created placeholder: ${file.name}`);
});

console.log('\nPlaceholder assets created!');
console.log('Note: These are empty files. For production, replace with actual images:');
console.log('- icon.png: 1024x1024px app icon');
console.log('- splash.png: 1242x2436px splash screen');
console.log('- adaptive-icon.png: 108x108px Android adaptive icon');
console.log('- favicon.png: 48x48px web favicon');