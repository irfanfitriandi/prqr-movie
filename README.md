# PQR Movie: A Nuxt.js-based Movie Information Application

PQR Movie is a comprehensive web application built with Nuxt.js that provides users with detailed information about movies and TV shows. It leverages The Movie Database (TMDb) API to fetch and display a wide range of content, including popular movies, TV shows, cast information, and user reviews.

This application offers a rich user interface with features such as movie carousels, detailed movie pages, and advanced filtering options. It's designed to provide an engaging and informative experience for movie enthusiasts and casual viewers alike.

# Important Notice: API Access Issue on Vercel Deployment

Due to a known limitation with Vercel's serverless environment and Nuxt 3's Nitro engine when handling proxy server requests, this application encounters a **403 - Host Not Permitted** error when trying to access the API in a production deployment on Vercel.

## Reason for the Issue

Vercel imposes certain restrictions on outgoing requests, particularly when proxying requests to external services. This can cause API requests made via Nuxt 3's Nitro server to be blocked if the target host is not explicitly permitted in Vercel's configuration. Unfortunately, this limitation prevents the application from functioning properly in production.

## Recommended Solution

To ensure full API access and proper functionality, we recommend running the application **locally** instead of deploying it to Vercel. You can do so with the following steps:

### Steps to Run Locally

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:

   ```sh
   npm install  # or yarn install
   ```

3. Run the application in development mode:
   ```sh
   npm run dev  # or yarn dev
   ```

This setup will allow the application to connect to the API without restrictions.

## Repository Structure

The repository is organized as follows:

```
.
├── app.vue                 # Main application component
├── assets/                 # Static assets (CSS)
├── components/             # Vue components
│   ├── icons/              # Icon components
│   ├── layouts/            # Layout components
│   ├── pages/              # Page-specific components
│   └── shared/             # Shared components
├── composables/            # Vue composables
├── layouts/                # Nuxt layouts
├── libs/                   # Utility libraries
│   ├── constants/          # Constant definitions
│   ├── stores/             # Pinia stores
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── pages/                  # Nuxt pages
├── plugins/                # Nuxt plugins
├── public/                 # Public static files
└── server/                 # Server-side code
    └── api/                # API routes
```

Key Files:

- `nuxt.config.ts`: Nuxt configuration file
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `composables/useContentFetch.ts`: Main composable for fetching content
- `libs/constants/url.constant.ts`: API endpoint definitions
- `server/api/[...].ts`: API proxy handler

## Usage Instructions

### Installation

Prerequisites:

- Node.js (v14 or later)
- pnpm (v6 or later), npm, or yarn

To install the project dependencies, run one of the following commands based on your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### Getting Started

To start the development server, use one of the following commands:

```bash
# Using pnpm (recommended)
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

This will start the application on `http://localhost:3000`.

### Configuration

The application requires configuration of API keys and endpoints. Create a `.env` file in the root directory with the following variables:

```
NUXT_API_BASE_URL=https://api.themoviedb.org/3
NUXT_API_IMG_BASE_URL=https://image.tmdb.org/t/p
NUXT_PUBLIC_API_KEY=your_tmdb_api_key
NUXT_PUBLIC_API_IMG=/api/img
```

Replace `your_tmdb_api_key` with your actual TMDb API key.

### Building for Production

To build the application for production:

```bash
# Using pnpm
pnpm build

# Using npm
npm run build

# Using yarn
yarn build
```

To preview the production build:

```bash
# Using pnpm
pnpm preview

# Using npm
npm run preview

# Using yarn
yarn preview
```

### Linting

To run linting checks:

```bash
# Using pnpm
pnpm lint

# Using npm
npm run lint

# Using yarn
yarn lint
```

To automatically fix linting issues:

```bash
# Using pnpm
pnpm lint:fix

# Using npm
npm run lint:fix

# Using yarn
yarn lint:fix
```

## Data Flow

The application follows a typical Nuxt.js data flow:

1. Client makes a request to a page
2. Nuxt server receives the request
3. The appropriate page component is loaded
4. Server-side data fetching occurs using `useContentFetch` composable
5. The page is rendered on the server with initial data
6. The page is sent to the client
7. The page becomes interactive, and client-side navigation can occur
8. Subsequent data fetching happens on the client-side

```
[Client] <-> [Nuxt Server] <-> [API Proxy] <-> [TMDb API]
   ^              |
   |              v
[Vue Components] <-> [Pinia Stores]
```

The `useContentFetch` composable manages the state of content fetching, including pagination, filtering, and sorting. It interacts with the Pinia stores for genres and languages to provide a seamless data management experience.
