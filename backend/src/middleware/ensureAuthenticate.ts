import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  USUARIO: string,
  EMAIL: string,
  iat: number
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Token not valid" });
  }

  const [, token] = authToken.split(" ");

  try {

    const sub = verify(token, process.env.SECRET_KEY!) as any;
    const payload: IPayLoad = sub

    req.USUARIO_ID = payload.USUARIO

    return next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
}