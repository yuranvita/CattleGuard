import { AppError } from "../error/AppError"
import { prisma } from "../prisma"
import { hash } from 'bcrypt'
import { bigIntSerializer } from "../utils/bigIntSerializer"


interface IUserCreate {
  NOME:string,
  EMAIL : string,
  SENHA:string,
  TELEFONE:string,
  ENDERECO:string,
  PERFIL_USUARIO? : string
  CRMV:string
}


export class UserService{
  
  async create(USUARIO : IUserCreate){
    const checkUser = await prisma.uSUARIO.findFirst({
    where : {
      EMAIL : USUARIO.EMAIL
    }
    })

    if(checkUser){
      throw new AppError('EMAIL já está sendo usado')
    }
    const userCreated = await prisma.uSUARIO.create({
      data : {
        NOME : USUARIO.NOME,
        EMAIL : USUARIO.EMAIL,
        SENHA : await hash(USUARIO.SENHA , 10),
        TELEFONE : USUARIO.TELEFONE,
        ENDERECO : USUARIO.ENDERECO,
      }
    })

    if(USUARIO.PERFIL_USUARIO){

      const checkCRMV = await prisma.vETERINARIO.findFirst({
        where : {
          CRMV : USUARIO.CRMV
        }
      })

      if(checkCRMV){
        throw new AppError("este CRMV já está cadastrado")
      }

      await prisma.uSUARIO.update({
        data: {
          PERFIL_USUARIO : "VETERINARIO"
        },where :{
          ID : userCreated.ID
        }
      })
      await prisma.vETERINARIO.create({
        data :{
          USUARIO_ID : userCreated.ID,
          CRMV : USUARIO.CRMV,
        }
      })
    } 

    return bigIntSerializer(userCreated)
  }

  async list(){
    const users = await prisma.uSUARIO.findMany({
      select : {
        ID: true,
        EMAIL : true,
        ENDERECO : true,
        TELEFONE : true,
        PERFIL_USUARIO : true,
      }
    })
    return bigIntSerializer(users)
  }
}