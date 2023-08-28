import { AppError } from "../error/AppError"
import { prisma } from "../prisma"
import { bigIntSerializer } from "../utils/bigIntSerializer"

interface IAnimalCreate {
    NOME: string
    SEXO: string,
    DATA_NASCIMENTO: Date,
    CATEGORIA: string,
    PESO: string,
    STATUS: string,
    PROPRIEDADE_ID: number
    USUARIO_ID: string
}

interface IAnimal extends IAnimalCreate {
    ID: number
}

export class AnimalService {

    async findOneById(ID: number) {
        const animal = await prisma.aNIMAL.findFirst({
            where: {
                ID: ID
            }
        })

        return bigIntSerializer(animal)
    }

    async create({ NOME, CATEGORIA, DATA_NASCIMENTO, PESO, PROPRIEDADE_ID, SEXO, STATUS, USUARIO_ID }: IAnimalCreate) {

        const checkProperty = await prisma.pROPRIEDADE.findFirst({
            where: {
                ID: PROPRIEDADE_ID
            }
        })
        console.log(checkProperty, USUARIO_ID)

        if (checkProperty?.USUARIO_ID.toString() !== USUARIO_ID.toString()) {
            throw new AppError("A propriedade não corresponde ao do usuário")
        }

        const animal = await prisma.aNIMAL.create({
            data: {
                NOME,
                DATA_NASCIMENTO: new Date(DATA_NASCIMENTO).toISOString(),
                CATEGORIA,
                PROPRIEDADE_ID,
                SEXO,
                STATUS,
                PESO,
                USUARIO_ID: Number(USUARIO_ID),
            }
        })

        return bigIntSerializer(animal)
    }
}