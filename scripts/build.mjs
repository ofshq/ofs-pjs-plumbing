import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const gallery = JSON.parse(await readFile(path.join(root, 'content/gallery.json'), 'utf8'));
if (!Array.isArray(gallery.projects) || gallery.projects.length === 0) {
  throw new Error('content/gallery.json must contain at least one project.');
}

const cards = gallery.projects.map((project) => {
  for (const field of ['title', 'description', 'image', 'alt']) {
    if (!project[field]) throw new Error(`Gallery project is missing ${field}.`);
  }
  return `
          <article class="work-card">
            <div class="work-card-image">
              <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy" decoding="async">
            </div>
            <div class="work-card-content">
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.description)}</p>
            </div>
          </article>`;
}).join('\n');

let html = await readFile(path.join(root, 'src/index.html'), 'utf8');
html = html.replace('<!-- PROJECTS -->', cards);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });
await cp(path.join(root, 'admin'), path.join(dist, 'admin'), { recursive: true });
await cp(path.join(root, 'thanks'), path.join(dist, 'thanks'), { recursive: true });
await writeFile(path.join(dist, 'index.html'), html);
await writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://ofs-pjs-plumbing.netlify.app/sitemap.xml\n');
await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://ofs-pjs-plumbing.netlify.app/</loc></url></urlset>\n`);
console.log(`Built ${gallery.projects.length} gallery projects into dist/.`);
