import { compare } from "bcrypt";
import { prisma } from "../prisma";
import jwt from "jsonwebtoken";
import { AppError } from "../error/AppError";

export class AuthService {
  async execute(EMAIL: string, SENHA: string) {
    const checkUser = await prisma.uSUARIO.findFirst({
      where: {
        EMAIL: EMAIL,
      },
    });

    if (!checkUser) {
      throw new AppError("Usuário ou senha incorreto");
    }

    const match = await compare(SENHA, checkUser.SENHA);

    if (!match) {
      throw new AppError("Usuário ou senha incorreto");
    }

    const token = jwt.sign(
      {
        USUARIO_ID: checkUser.ID.toString(),
        EMAIL: checkUser.EMAIL,
      },
      process.env.SECRET_KEY!
    );

    return token;
  }
}
