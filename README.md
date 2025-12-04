# Express + TypeScript Starter

A minimal, modular Express starter written in TypeScript. It includes environment-based configuration, basic routing, and helpful defaults to get APIs running quickly without locking you into a specific architecture.

## Features
- TypeScript-first setup with sensible `tsconfig` defaults
- Environment variable loading via `dotenv` with centralized parsing
- Preconfigured routing with a root welcome message and `/health` endpoint
- JSON body parsing, 404 handling, and error middleware included
- Ready-to-use scripts for development, building, and running compiled output

## Getting started

### Prerequisites
- Node.js 18+ (recommended)
- npm

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and adjust values as needed:
   ```bash
   cp .env.example .env
   ```

### Available scripts
- `npm run dev` – start the app in watch mode with nodemon
- `npm run build` – compile TypeScript to `dist`
- `npm start` – run the compiled server from `dist`

### Running the app
1. Build or run in dev mode:
   ```bash
   npm run dev
   # or
   npm run build
   npm start
   ```
2. Visit the default routes:
   - `GET /` returns a welcome message
   - `GET /health` returns `{ "status": "ok" }`

## Project structure
```
├── src
│   ├── app.ts              # Express app setup, middleware, routes
│   ├── config
│   │   └── environment.ts  # Environment variable parsing and defaults
│   ├── routes
│   │   ├── health.ts       # Health check endpoint
│   │   └── index.ts        # Router composition
│   └── server.ts           # Server bootstrap
├── .env.example            # Sample environment variables
└── tsconfig.json           # TypeScript configuration
```

## Customization notes
- Update `src/routes` to add feature-specific routers; `src/routes/index.ts` is the central place to mount them.
- Adjust `src/config/environment.ts` to introduce additional environment variables with validation.
- Use middleware in `src/app.ts` to add cross-cutting concerns like logging, CORS, or authentication.
