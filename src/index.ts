import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { esbuildBundler } from "@syumai/hono-esbuild-bundler/node";

const app = new Hono();

app.get("/bundle/*", esbuildBundler());

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
