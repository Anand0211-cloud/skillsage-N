import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  // Typography
  { from: /\btext-white\b/g, to: 'text-slate-900' },
  { from: /\btext-slate-400\b/g, to: 'text-slate-600' },
  { from: /\btext-slate-300\b/g, to: 'text-slate-700' },
  { from: /\btext-slate-500\b/g, to: 'text-slate-500' }, // keep 500 as is
  
  // Backgrounds
  { from: /\bbg-slate-950\/20\b/g, to: 'bg-slate-50' },
  { from: /\bbg-slate-900\/30\b/g, to: 'bg-slate-50' },
  { from: /\bbg-white\/5\b/g, to: 'bg-white' },
  { from: /\bbg-white\/10\b/g, to: 'bg-slate-50' },
  { from: /\bbg-brand-dark\/80\b/g, to: 'bg-white/90' },
  { from: /\bbg-brand-dark\b/g, to: 'bg-white' },
  
  // Borders
  { from: /\bborder-white\/5\b/g, to: 'border-slate-200' },
  { from: /\bborder-white\/10\b/g, to: 'border-slate-200' },
  { from: /\bborder-white\/20\b/g, to: 'border-slate-300' },
  
  // Gradients
  { from: /\bfrom-white\b/g, to: 'from-slate-900' },
  { from: /\bto-white\b/g, to: 'to-slate-900' },
  { from: /\bvia-white\b/g, to: 'via-slate-900' },
  
  // Button & Hover Fixes (Restore contrast for accented backgrounds)
  { from: /bg-brand-accent([^"']*)text-slate-900/g, to: 'bg-brand-accent$1text-white' },
  { from: /bg-brand-electric([^"']*)text-slate-900/g, to: 'bg-brand-electric$1text-white' },
  { from: /bg-brand-highlight([^"']*)text-slate-900/g, to: 'bg-brand-highlight$1text-white' },
  { from: /text-slate-900([^"']*)hover:text-slate-900/g, to: 'text-slate-900$1hover:text-brand-accent' },
  { from: /text-slate-600([^"']*)hover:text-slate-900/g, to: 'text-slate-600$1hover:text-brand-accent' },
  
  // Primary Buttons (bg-white text-brand-dark -> bg-slate-900 text-white)
  { from: /bg-white([^"']*)text-brand-dark/g, to: 'bg-slate-900$1text-white' },
  // Some buttons might have already been transformed to bg-white text-white due to earlier rules
  { from: /bg-white([^"']*)hover:bg-brand-electric([^"']*)hover:text-slate-900/g, to: 'bg-slate-900$1hover:bg-brand-electric$2hover:text-white' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const rule of replacements) {
        content = content.replace(rule.from, rule.to);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log("Done updating theme classes.");
