import express from 'express'
import { UserBootcampController } from '../controller/index.js'

const router = express.Router()

//CRUD UserBootcamp

router.post("/", UserBootcampController.addUser)
router.get("/", UserBootcampController.allUserBootcamp)

export { router as UserBootcampController }