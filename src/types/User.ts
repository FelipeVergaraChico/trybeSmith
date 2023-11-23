export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type TokenUser = {
  id: number,
  username: string,
};

export type VerifyToken = {
  username: string,
  password: string,
};

export type Token = {
  token: string,
};