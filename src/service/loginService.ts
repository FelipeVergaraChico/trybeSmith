import UserModel from '../database/models/user.model';
import { TokenUser, VerifyToken, Token } from '../types/User';
import { ResponseServiceType } from '../types/ResponseService';
import bcrypt from '../utils/bcrypt';
import utilToken from '../utils/UtilToken';

const verify = async (user:VerifyToken): Promise<TokenUser | null> => {
  const Exist = await UserModel.findOne({ where: { username: user.username } });
  if (!Exist) {
    return null;
  }
  const passVerify = bcrypt.compare(user.password, Exist.dataValues.password);
  if (passVerify) {
    const { username, id } = Exist.dataValues;
    return { username, id };
  }
  return null;
};

const login = async (user:VerifyToken): Promise<ResponseServiceType<Token>> => {
  const userVerify = await verify(user);
  if (!userVerify) {
    return { status: 'UNAUTORIZED', data: { message: 'Username or password invalid' } };
  }
  const token = utilToken.jwtToken(userVerify);
  return { status: 'OK', data: { token } };
};

export default {
  login,
};