import { compare } from "bcrypt";

export async function comparePassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}
