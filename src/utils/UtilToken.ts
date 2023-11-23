import Jwt from 'jsonwebtoken';
import { TokenUser } from '../types/User';

const SECRET_KEY = process.env.JWT_SECRET;

const jwtToken = (payload:TokenUser): string => Jwt.sign(payload, String(SECRET_KEY));

export default {
  jwtToken,
};