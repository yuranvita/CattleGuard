import { Request, Response } from "express";
import { UserService } from "../services/users.service";


export class UserController {
  private userService

  constructor() {
    this.userService = new UserService()
  }

  async handleCreate(req: Request, res: Response) {
    const data = req.body
    console.log(process.env.SECRET_KEY)
    const user = await this.userService.create(data)

    return res.status(201).json(JSON.parse(user))
  }

  async handleList(req: Request, res: Response) {
    const users = await this.userService.list()
    return res.json(JSON.parse(users))
  }


}