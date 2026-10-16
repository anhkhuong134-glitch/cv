import fs from 'fs';

const planPath = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\nghịch\\KE-HOACH-NANG-CAP-CV-ANTIGRAVITY-2026-10-16.md';
const content = fs.readFileSync(planPath, 'utf8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);

lines.forEach((l, idx) => {
  if (l.includes('BẢN ĐĂNG') || l.match(/^###\s+A\d+/)) {
    console.log(`${idx + 1}: ${l}`);
  }
});
