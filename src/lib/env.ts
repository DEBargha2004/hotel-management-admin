import { z } from "zod";

const envSchema = z.object({
  DATABASE_URI: z.string(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
