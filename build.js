const fs = require('fs');
const path = require('path');

// Build script for Vercel deployment
// Replaces environment variable placeholders in HTML

console.log('Building for Vercel deployment...');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace environment variable placeholders
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://sgrvxuepflnxhhwxkqkz.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNncnZ4dWVwZmxueGhod3hrcWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNjgyMzYsImV4cCI6MjA4MDk0NDIzNn0.lHmwYOaBXU3lwRZrLbhvbPVDC0nZUT4nJpzSUnwQchg';

html = html.replace('${VITE_SUPABASE_URL}', supabaseUrl);
html = html.replace('${VITE_SUPABASE_ANON_KEY}', supabaseKey);

// Write the processed HTML back
fs.writeFileSync(indexPath, html);

console.log('Build complete - environment variables injected into HTML');