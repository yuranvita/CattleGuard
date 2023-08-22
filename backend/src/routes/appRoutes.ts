import { Router } from "express";
import { UserController } from "../controllers/users.controller";
import { AuthController } from "../controllers/auth.controller";
import { PropertyController } from "../controllers/property.controller";
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";

const appRouter = Router()

const auth = new AuthController()
const user = new UserController()
const property = new PropertyController()

//post

appRouter.post("/login", auth.handleLogin.bind(auth))
appRouter.post("/user", user.handleCreate.bind(user))
appRouter.post("/property", ensureAuthenticated, property.create.bind(property))
appRouter.put("/property/:ID", ensureAuthenticated, property.update.bind(property))
appRouter.get("/property/:ID", ensureAuthenticated, property.findOne.bind(property))


//get
appRouter.get("/user", user.handleList.bind(user))


export { appRouter }