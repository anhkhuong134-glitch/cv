import fs from 'fs';

const planPath = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\nghịch\\KE-HOACH-NANG-CAP-CV-ANTIGRAVITY-2026-10-16.md';
const content = fs.readFileSync(planPath, 'utf8');

// Let's locate the start of each article and end
const articleRegex = /###\s+(A\d+)\s+—\s+BẢN ĐĂNG/g;
let match;
const articles = [];

while ((match = articleRegex.exec(content)) !== null) {
  articles.push({
    id: match[1],
    index: match.index
  });
}

for (let i = 0; i < articles.length; i++) {
  const current = articles[i];
  const next = articles[i + 1];
  const endIndex = next ? next.index : content.indexOf('## 6.2.', current.index);
  const articleContent = content.substring(current.index, endIndex).trim();
  const firstLine = articleContent.split('\n')[2] || '';
  console.log(`${current.id}: length ${articleContent.length} chars, title line: ${firstLine}`);
}
