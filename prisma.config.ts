// prisma/config.ts
import "dotenv/config"; // <- bu satır çok önemli, .env dosyasını otomatik yükler
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "lib/generated/prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"), // artık .env’den okunacak
  },
});
