import * as z from "zod";

export const guestSchema = z.object({
  name: z.string(),
  phone: z.number().refine((v) => v.toString().length === 10, {
    message: "Phone number must be 10 digits",
  }),
  sex: z.number(),
  address: z.string().optional(),
  occupation: z.string().optional(),
  dob: z.string().optional(),
  document: z.string().optional(),
  isStarred: z.boolean().optional(),
});

export type TGuest = z.infer<typeof guestSchema>;
