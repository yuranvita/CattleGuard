import { AppError } from "../error/AppError";
import { prisma } from "../prisma";
import { hash } from "bcrypt";
import { bigIntSerializer } from "../utils/bigIntSerializer";

interface IUserCreate {
  NOME: string;
  EMAIL: string;
  SENHA: string;
  TELEFONE: string;
  ENDERECO: string;
  PERFIL_USUARIO?: string;
  CRMV: string;
}

export class UserService {
  async create(user: IUserCreate) {
    const checkUser = await prisma.uSUARIO.findFirst({
      where: {
        OR: [{ TELEFONE: user.TELEFONE }, { EMAIL: user.EMAIL }],
      },
    });

    if (checkUser) {
      throw new AppError("Email ou Telefone já está sendo usado");
    }
    const userCreated = await prisma.uSUARIO.create({
      data: {
        NOME: user.NOME,
        EMAIL: user.EMAIL,
        SENHA: await hash(user.SENHA, 10),
        TELEFONE: user.TELEFONE,
        ENDERECO: user.ENDERECO,
      },
    });

    if (user.PERFIL_USUARIO) {
      const checkCRMV = await prisma.vETERINARIO.findFirst({
        where: {
          CRMV: user.CRMV,
        },
      });

      if (checkCRMV) {
        throw new AppError("este CRMV já está cadastrado");
      }

      await prisma.uSUARIO.update({
        data: {
          PERFIL_USUARIO: "VETERINARIO",
        },
        where: {
          ID: userCreated.ID,
        },
      });
      await prisma.vETERINARIO.create({
        data: {
          USUARIO_ID: userCreated.ID,
          CRMV: user.CRMV,
        },
      });
    }

    return bigIntSerializer(userCreated);
  }

  async list() {
    const users = await prisma.uSUARIO.findMany({
      select: {
        ID: true,
        EMAIL: true,
        ENDERECO: true,
        TELEFONE: true,
        PERFIL_USUARIO: true,
      },
    });
    return bigIntSerializer(users);
  }
}
