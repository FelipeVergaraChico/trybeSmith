import { NextFunction, Request, Response } from 'express';

function validateLoginUser(req: Request, res: Response, next: NextFunction): Response | void {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  return next();
}

export default {
  validateLoginUser,
};