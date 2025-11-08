# Repository Map — neoamorfic-site

- Generated: 2025-11-08 20:52 UTC
- Branch: docs/repo-map
- Author: @JAMTUPAY

## Structure

.
├── .gitignore
├── app
│   ├── contact
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── founder
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   ├── page.tsx
│   ├── patents
│   │   └── page.tsx
│   ├── portfolio
│   │   └── page.tsx
│   ├── press
│   │   └── page.tsx
│   └── qeiv15
│       └── page.tsx
├── components
│   ├── Footer.tsx
│   └── Nav.tsx
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── REPO_MAP.md
└── tsconfig.json

10 directories, 27 files

## Notes
- Purpose: *(to be confirmed)*
- Entrypoints: *(main app/server/start scripts here)*
- Dependencies: *(key internal/external libs observed)*
- Build/Deploy: *(current build/deploy path)*
- Cleanup candidates: *(dead code, large artifacts, TODOs)*

## Next Review Items
- [ ] Protect `main` (PR required, 1 approval, required checks).
- [ ] Enable Secret Scanning, Push Protection, Dependabot, CodeQL.
- [ ] Confirm public API surface vs internal-only modules.
