# WFA API Client Documentation

This repo contains the documentation site for the WFA API Client, built with Nextra + Next.js.
- 📦 Library repo: https://github.com/TheWFA/api-client-js
- 📖 API Docs: https://docs.thewfa.org.uk
- 🔑 Developer portal (tokens): https://developers.thewfa.org.uk

⸻

Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the docs locally.

3. Build for production

```bash
npm run build
npm run start
```

⸻

Project Structure

```text
.
├── content/           # Documentation pages (MDX/Markdown)
├── public/          # Static assets (images, logos, etc.)
├── theme.config.tsx # Nextra theme configuration
├── next.config.js   # Next.js configuration
└── package.json
```
- pages/ contains the actual documentation content (Markdown/MDX).
- theme.config.tsx defines sidebar, navbar, logo, and project links.

⸻

Contributing
- Fix typos, improve explanations, or add new guides by editing the Markdown files in content/.
- Open a Pull Request against the main branch.

If you’re adding docs for a new API feature, coordinate changes with the API client repo:
https://github.com/TheWFA/api-client-js

⸻

Deployment

This site is typically deployed automatically via AWS Amplify.
Each push to main will rebuild and redeploy the docs.

⸻

License

MIT © WFA / Contributors
