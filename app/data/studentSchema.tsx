import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(1, "Please enter a Name"),
  lastName: z.string().min(1, "Please enter a Name"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}/, "Please use YYYY-MM-DD format"),
  grade: z
    .string()
    .refine((g) => Number(g) > 0, { message: "Please use valid grade (1-12)" })
    .refine((g) => Number(g) < 13, {
      message: "Please use valid grade (1-12)",
    }),
});

export type StudentData = z.infer<typeof studentSchema>;
