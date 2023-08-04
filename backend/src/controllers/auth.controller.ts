import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";


export class AuthController {
  private authService
  
  constructor(){
    this.authService = new AuthService()
  }

  async handleLogin(req : Request,res : Response){
    const {EMAIL , SENHA}  = req.body
    const token = await this.authService.execute(EMAIL , SENHA)
    return res.json({token:`Bearer ${token}`})
  }
}