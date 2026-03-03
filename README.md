# Remote Job Finder UI

Quick notes for development, pushing, and continuous workflow.

Prerequisites
- Node.js (16+ recommended)
- npm or yarn
- Git (install from https://git-scm.com/download/win)

Local setup

```powershell
cd "c:\Users\sekar\OneDrive\Desktop\projects\mini project 2\mini2"
npm install
npm run dev
```

Initial Git & push

```powershell
# configure (once)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/kumaran2617/remote-job-finder-ui.git
git branch -M main
git push -u origin main
```

Continuous Integration

This repo includes a simple GitHub Actions workflow at `.github/workflows/ci.yml` that installs dependencies and runs `npm run build`. Connect your repo on GitHub and the workflow will run on pushes and PRs to `main`.

Deployment

- Vercel: recommended for Vite apps — connect the GitHub repo and it auto-deploys on push.
- GitHub Pages: build `dist/` and deploy with `gh-pages` or an Actions job.

Troubleshooting
- If `git` is not found, reinstall Git and ensure it's added to PATH.
- For HTTPS pushes, create a GitHub Personal Access Token (PAT) if the credential prompt appears.

Workflow recommendations
- Use feature branches (`feature/xxx`) and open PRs to `main`.
- Protect `main` in GitHub settings and require CI to pass before merging.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
