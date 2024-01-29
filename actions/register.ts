'use server';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import { RegisterSchema } from '@/schemas';
import { db } from '@/lib/db';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: 'Invalid Fields' };
  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) return { error: 'Email already in use!' };
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Todo: Send verification token email
  return { success: 'User created!' };
};