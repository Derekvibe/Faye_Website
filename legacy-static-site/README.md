# Favour's website: hosting and editing guide

This is a static website (plain HTML, CSS and JavaScript). There is nothing to install and no server needed.
Open `index.html` in a browser to preview it, or upload the whole folder to any host.

## Free hosting (pick one)

**Netlify Drop (easiest, about 1 minute)**
1. Go to app.netlify.com/drop
2. Drag the whole `favour-website` folder onto the page.
3. You get a free link straight away. Add a custom domain later in Site settings if you like.

**Cloudflare Pages**
1. Create a free account, then Workers and Pages, then Create, then Pages, then Upload assets.
2. Upload this folder, deploy, done.

**GitHub Pages**
1. Create a free repository and upload these files to it.
2. In Settings, then Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`.

Keep the folder structure exactly as it is, with `index.html` at the top level.

## Common edits

- **Fiverr link:** search for `fiverr.com/s/X00Ar10` in `index.html` and replace it (it appears on every button).
- **Prices ("From $20", "From $40"):** search for `From $` in `index.html`. These match the Fiverr gigs when the site was built, so update them if the gigs change.
- **Rating and review count (4.8 and 79):** search for `4.8` and `79` in `index.html`, and for `data-count` values in the About section.
- **Reviews:** edit the three `.rev` blocks. Only quote real reviews.
- **Add a cover:** save a front cover as WebP or JPG in `assets/img/covers/`, then copy one `<button class="cover ...">` block in the portfolio grid and change the file name, title, author and `data-genre` (fiction, nonfiction, children, christian or academic).
- **Colours and fonts:** the variables at the top of `css/styles.css`.

## Before you publish

- Confirm each client is happy for their cover to appear in the portfolio.
- Add a custom domain name when ready. Once you have one, add the full address to the `og:image` tag so social previews show the picture.
- Fonts (DM Serif Display and Inter) are included in `assets/fonts`, so the site works without any external services.
