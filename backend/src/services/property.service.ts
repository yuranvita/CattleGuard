import { AppError } from "../error/AppError"
import { prisma } from "../prisma"
import { bigIntSerializer } from "../utils/bigIntSerializer"

interface IPropertyCreate {
  NOME: string
  LAT: string
  LNG: string
  ENDERECO: string
  USUARIO_ID: BigInt
}

interface  IProperty extends IPropertyCreate{
  ID:number
}

export class PropertyService{
  async create({ NOME, LAT, LNG, ENDERECO, USUARIO_ID} : IPropertyCreate){

    const checkProperty = await prisma.pROPRIEDADE.findFirst({
      where :{
        NOME,
        USUARIO_ID : Number(USUARIO_ID)
      }
    })

    if(checkProperty){
      throw new AppError("Nome de fazenda já cadastrado na base para esse usuário")
    }

    const property = await prisma.pROPRIEDADE.create({
      data:{
        NOME,
        LAT,
        LNG,
        ENDERECO,
        USUARIO_ID : Number(USUARIO_ID),
      }
    })

    return bigIntSerializer(property)
    }

    async update({ NOME, LAT, LNG, ENDERECO, ID} : IProperty){

      await prisma.pROPRIEDADE.update({
        data : {
          NOME,
          LAT,
          LNG,
          ENDERECO
        } ,
        where : {
          ID 
        }
      })

      return 
    }
}