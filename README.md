# YaroSheyh | Nuxt 4

O, Kak!

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

Copy **.env.example** to **.env**:

```bash
cp .env.example .env
```

Fill **.env** with your **own** values:

```dotenv
BETTER_AUTH_SECRET="generate-it"
BETTER_AUTH_URL="http://localhost:3000"
DATABASE_URL="file:main.db"
GITHUB_CLIENT_ID="client-id-of-your-github-oauth-app"
GITHUB_CLIENT_SECRET="client-secret-of-your-github-oauth-app"
GOOGLE_CLIENT_ID="client-id-of-your-google-oauth-app"
GOOGLE_CLIENT_SECRET="client-secret-of-your-google-oauth-app"
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Use latest [shadcn-vue](https://shadcn-vue.com):

```bash
pnpm shadcn-vue
```

Generate .sql migration:

```bash
pnpm db:generate
```

Apply migrations:

```bash
pnpm db:migrate
```
