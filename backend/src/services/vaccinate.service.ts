import { AppError } from "../error/AppError"
import { prisma } from "../prisma"

enum REMEDIO {
  SUPLEMENTO = 'SUPLEMENTO',
  REMEDIO = 'REMEDIO',
  VERMIFUGO = 'VERMIFUGO',
  VACINA = 'VACINA'
}

interface  IPropsVacctinate{
  vaccinate : {
    NOME: string,
    FABRICANTE: string,
    COMPOSICAO:string,
    POSOLOGIA:string,
    LOTE:string,
    FRASCO_ML:string,
    NFE_NUMERO:string,
    NFE_CHAVE:string,
    TIPO_REMEDIO: REMEDIO,
    USUARIO_ID:number
  }[]
  USUARIO_ID:string
}

export class VaccinateService {
    async create({vaccinate,USUARIO_ID} : IPropsVacctinate){
        if(!USUARIO_ID){
          throw new AppError("Usuário não está autenticado")
        }

        vaccinate.map(e => {
          e.USUARIO_ID = Number(USUARIO_ID)
          return e
        })

        const res = await prisma.vACINA.createMany({
          data : [
            ...vaccinate
          ]
          
        })

        return res
  }


}