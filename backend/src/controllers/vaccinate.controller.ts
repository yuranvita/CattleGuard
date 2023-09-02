import { Request, Response } from "express";
import { VaccinateService } from "../services/vaccinate.service";


export class VacctinateController {
  private vaccinateService
  
  constructor(){
    this.vaccinateService = new VaccinateService()
  }

  async handleCreate(req : Request,res : Response){
    let vaccinate  = req.body
    
    const USUARIO_ID = req.USUARIO_ID
 
    const response = await this.vaccinateService.create({vaccinate , USUARIO_ID})

    return res.json({message : `você cadastrou um total de ${response.count} vacinas`})
  }

}