# Getting Started

Welcome to the **WFA API** — the easiest way to access structured data from powerchair football matches managed by the Wheelchair Football Association.

You can begin using the API in two ways:

---

## Option 1: Use the HTTP API Directly

Make HTTP requests to the official base URL:

```http
https://api.thewfa.org.uk
```

### Example: Fetch all competitions

```http
GET /competitions
Host: api.thewfa.org.uk

Full URL: https://api.thewfa.org.uk/competitions
```

**Response (JSON):**

```json
[
    {
        "id": "prem-2024",
        "name": "WFA National Premiership",
        "season": "2024/25"
    },
  ...
]
```

Use standard tools like `curl`, Postman, or any HTTP client in your preferred language.

## Option 2: Use the Official JavaScript Client

We provide a JavaScript client to acccess the API. This client can be used across the backend and frontend, meaning it can seamlessly intergrate with any JavaScript project.

Install the WFA API client using the node package manager:

```sh
npm install @thewfa/api-client
```

### Example Usage
```js
import { createClient } from '@thewfa/api-client';

const client = createClient();

// Fetch all teams
const teams = await client.teams.list();

console.log(teams);
```

The client handles base URLs, response typing, and common error handling out of the box — perfect for React, Next.js, Node.js, or serverless projects.

<!-- ## Authentication

COMING SOON -->

## Next Steps

- [Explore available endpoints](./endpoints.md)
- [Read about rate limits and quotas](./rate-limits.md)
- [See code examples](./examples.md)

---

Need help? Reach out at [api@thewfa.org](mailto:api@thewfa.org) or visit our [GitHub repo](https://github.com/wfa-org/wfa-api-client).
