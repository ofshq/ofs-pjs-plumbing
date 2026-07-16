# PJ's Plumbing Service LLC

Static Netlify website with a Decap CMS photo manager.

## Build

```bash
npm run build
```

Netlify publishes the generated `dist` directory.

## Patrick's photo workflow

After Netlify Identity and Git Gateway are enabled and Patrick is invited at `pjsplumbingservices@gmail.com`:

1. Visit `/admin/`.
2. Sign in.
3. Open **Website → Project Photos**.
4. Add, reorder, edit, or remove a project.
5. Upload a photo, add a title, short description, and image description.
6. Save. Netlify automatically rebuilds and publishes the site.

The same system can be copied to Ryan's website by changing the branding, repository, Netlify site URL, and CMS collection labels.
