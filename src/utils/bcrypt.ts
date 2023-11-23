import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const hash = (pass: string): string => bcrypt.hashSync(pass, SALT_ROUNDS);
const compare = (pass: string, userPass: string): boolean => bcrypt.compareSync(pass, userPass);

export default {
  hash,
  compare,
};