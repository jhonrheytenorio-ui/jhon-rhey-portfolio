# Jhon Rhey Tenorio – Personal Portfolio

A responsive, static portfolio website built with plain HTML, CSS, and JavaScript. No database, backend, or paid service is needed.

## Files

```
index.html     ← page content (edit your text here)
style.css      ← colors, fonts, layout
script.js      ← mobile menu, scroll effects, project pop-ups
README.md      ← this guide
assets/        ← (create this folder) put logo.png / photo here
```

## Preview locally

**Easiest:** double-click `index.html`. It opens in your browser. (An internet connection is needed to load the Google Fonts; without it the site falls back to your system fonts.)

**Optional (live server):**
- In VS Code, install the *Live Server* extension, right-click `index.html`, then choose **Open with Live Server**.
- Or, with Python installed, run `python -m http.server 8000` inside this folder and open http://localhost:8000.

## Publish with GitHub Pages (free)

1. Create a GitHub account at https://github.com if you don't have one.
2. Click **New repository**. Name it `yourusername.github.io` for a main site (for example `jhonrheytenorio.github.io`), or any name such as `portfolio`. Set it to **Public**.
3. Click **uploading an existing file**, drag in `index.html`, `style.css`, `script.js`, `README.md` (and the `assets` folder if you add one), then click **Commit changes**.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to *Deploy from a branch*. Choose branch **main** and folder **/ (root)**, then click **Save**.
6. Wait 1–3 minutes. Your site will be live at:
   - `https://yourusername.github.io/` (if the repo is named `yourusername.github.io`), or
   - `https://yourusername.github.io/repository-name/`

To update the site later, edit or re-upload the files and commit. GitHub Pages republishes automatically.

## Adding your logo (e.g., the JPT #OpenToWork logo)

The site currently uses a text-based **JRT** monogram. To use your own image:

1. Create a folder named `assets` and save your file as `assets/logo.png`.
2. In `index.html`, find `<span class="brand-mark" aria-hidden="true">JRT</span>` and replace it with:
   ```html
   <img src="assets/logo.png" alt="Jhon Rhey Tenorio logo" class="brand-logo">
   ```
3. Add this to the end of `style.css`:
   ```css
   .brand-logo { height: 44px; width: auto; max-width: 140px; object-fit: contain; }
   ```
   `width: auto` and `object-fit: contain` keep the logo's original proportions (no stretching or cropping).

To show a photo in the hero card, replace the `<div class="monogram">…</div>` in `index.html` with an `<img>` and style it as a circle with `object-fit: cover`. Only use a photo of yourself.

## Editing tips

- **Colors:** change the values at the top of `style.css` (the `:root` block).
- **Text:** edit directly in `index.html`.
- **Project details pop-up text:** edit the `projects` object in `script.js`.
- **Adding a project link:** once a real project link exists, add a button to that project card in `index.html`, for example: `<a class="btn btn-outline" href="YOUR-REAL-LINK" target="_blank" rel="noopener noreferrer">View Project</a>`. Only add it when the link is real.

## About the contact section

There is no contact form on purpose. A form that actually sends messages needs a backend or a third-party service (for example Formspree, Web3Forms, or Netlify Forms), which usually requires signing up and adding an endpoint URL. Until then, the **mailto** email button and the LinkedIn link are the reliable ways for people to reach you.
