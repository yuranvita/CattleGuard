import { Request, Response } from "express";
import { PropertyService } from "../services/property.service";



export class PropertyController {

  private propertyService

  constructor() {
    this.propertyService = new PropertyService()
  }

  async findOne(req: Request, res: Response) {
    const { ID } = req.params

    const property = await this.propertyService.findOneById(Number(ID))

    return res.status(200).json(JSON.parse(property))
  }

  async create(req: Request, res: Response) {
    const data = req.body

    data.USUARIO_ID = req.USUARIO_ID

    const property = await this.propertyService.create(data)

    res.status(201).json(JSON.parse(property))
  }

  async update(req: Request, res: Response) {
    const data = req.body
    const { ID } = req.params

    const propertyUpdated = await this.propertyService.update({ ...data, ID })

    res.status(200).json(propertyUpdated)
  }


}