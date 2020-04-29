# Lancaster Software Co. Static Site Template

A static website template that comes with a Gulp pipeline and Tailwind CSS (with PurgeCSS).

# Setup

```
git clone git@github.com:lancastersoftwareco/static-site-template.git

cd static-site-template

npm install
```

# Development

In a terminal, run the `serve` command.

```
npm run serve
```

A BrowserSync tab will open, and any changes you make to an `.html` file in the `src` directory will automatically show up in your browser.

If you just want to build the dev site, use the `dev` command. This will build an un-minified version of your site in `dist`.

```
npm run dev
```

# Deployment

The `prod` command will build a deployable static version of your site to the `dist` folder. You can either deploy this folder directly to your static site host, or use the `npm run dev` command in your automated build deploys.

```
npm run prod
```
