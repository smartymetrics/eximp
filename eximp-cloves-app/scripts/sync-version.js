import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const timestamp = new Date().toISOString();
const versionData = {
    version: "1.0.0",
    timestamp: timestamp
};

// Paths
const publicPath = path.join(__dirname, '../public/version.json');
const srcPath = path.join(__dirname, '../src/version.js');

// Ensure directories exist
if (!fs.existsSync(path.dirname(publicPath))) fs.mkdirSync(path.dirname(publicPath), { recursive: true });
if (!fs.existsSync(path.dirname(srcPath))) fs.mkdirSync(path.dirname(srcPath), { recursive: true });

// Write to public/version.json
fs.writeFileSync(publicPath, JSON.stringify(versionData, null, 2));

// Write to src/version.js
fs.writeFileSync(srcPath, `export const APP_VERSION = "${timestamp}";\n`);

console.log(`✅ Version synchronized: ${timestamp}`);
