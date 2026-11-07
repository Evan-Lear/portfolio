# Portfolio

Static portfolio site — no build step. Deploys to Vercel as-is.

## Edit content
Everything lives in `content.js`. Put images / résumé PDF in `assets/` and reference them like `"assets/me.jpg"`. Empty fields and sections hide themselves.

## Preview locally
    npx serve .

## Deploy
- **Vercel dashboard:** push this folder to a GitHub repo → vercel.com/new → Import → Deploy (framework preset: "Other").
- **CLI:** `npx vercel` then `npx vercel --prod`.
