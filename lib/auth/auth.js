import { compare } from "bcrypt";

export async function comparePassword(password, hashPassword) {
  console.log(password, hashPassword);
  const isValid = await compare(password, hashPassword);
  return isValid;
}
