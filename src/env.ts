/** biome-ignore-all lint/style/noProcessEnv: env.ts file is used to define env vars */
import { createEnv } from "@t3-oss/env-nextjs"
import { vercel } from "@t3-oss/env-nextjs/presets-zod"
import { z } from "zod"

export const env = createEnv({
  server: {},
  // Should be prefixed with NEXT_PUBLIC_
  client: {
    NEXT_PUBLIC_TEST: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
  extends: [vercel()],
})
