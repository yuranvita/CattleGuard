import { Request, Response } from "express";
import { AnimalService } from "../services/animals.service";


export class AnimalController {

    private animalService

    constructor() {
        this.animalService = new AnimalService()
    }

    async create(req: Request, res: Response) {
        const data = req.body

        data.USUARIO_ID = req.USUARIO_ID

        const animal = await this.animalService.create(data)

        return res.json(JSON.parse(animal))
    }
}