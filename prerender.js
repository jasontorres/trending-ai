import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
  const { render, getRoutes } = await import('./dist/server/entry-server.js');

  const routesToPrerender = getRoutes();
  console.log('Routes to pre-render:', routesToPrerender);

  for (const url of routesToPrerender) {
    const { html: appHtml, head } = render(url);
    let html = template
      .replace('<!--ssr-outlet-->', appHtml)
      .replace('<!--ssr-head-->', head);

    const outputPath = url === '/' ? '/index.html' : `${url}/index.html`;
    const fullPath = toAbsolute(`dist/static${outputPath}`);
    
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html);
    console.log('pre-rendered:', outputPath);
  }

  console.log('SSG Build Complete!');
}

prerender();
