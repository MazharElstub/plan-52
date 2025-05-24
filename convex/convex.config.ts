import { defineConfig } from "convex/server";
import { authConfig } from "@convex-dev/auth/server";

export default defineConfig({
  ...authConfig,
});