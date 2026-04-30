import "server-only";

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tiles-gallery";
const mongoDbName = process.env.MONGODB_DB_NAME || "tiles-gallery";
const resolvedBaseURL =
  process.env.BETTER_AUTH_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "http://localhost:3000";

const client = new MongoClient(mongoUri);
const db = client.db(mongoDbName);

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const trustedOrigins = Array.from(
  new Set([
    ...(
      process.env.BETTER_AUTH_TRUSTED_ORIGINS || resolvedBaseURL
    )
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
    new URL(resolvedBaseURL).origin,
  ])
);
const secret =
  process.env.BETTER_AUTH_SECRET || "tiles-gallery-development-secret";

const socialProviders =
  googleClientId && googleClientSecret
    ? {
        google: {
          clientId: googleClientId,
          clientSecret: googleClientSecret,
          prompt: "select_account",
        },
      }
    : undefined;

export const auth = betterAuth({
  appName: "Tiles Gallery",
  baseURL: resolvedBaseURL,
  basePath: "/api/auth",
  secret,
  trustedOrigins,
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders,
  experimental: {
    joins: true,
  },
});
