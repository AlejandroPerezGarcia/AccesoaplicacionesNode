import express from 'express'
import { UsersController } from '../controller/index.js'

const router = express.Router()
//CRUD usuarios
router.post("/", UsersController.createUser)
router.get("/", UsersController.findAll)
router.get("/:id", UsersController.findUserById)
router.delete("/:id", UsersController.deleteUserById)
router.put("/:id", UsersController.updateUserById)
//CRUD Bootcamp



export { router as UserRouter }