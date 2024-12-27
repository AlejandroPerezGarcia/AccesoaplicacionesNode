import express from 'express'
import { BootcampsController } from '../controller/index.js'

const router = express.Router()
//CRUD Bootcamps
router.post("/", BootcampsController.createBootcamp)
router.get("/", BootcampsController.findAllBootcamp)
router.get("/:id", BootcampsController.findById)

export { router as BootcampRouter }
