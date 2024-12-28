import * as db from '../models/index.cjs'

const { Bootcamp, Users, User_bootcamp } = db.default

const BootcampsController = {}

//Agregar nuevo Bootcamps
BootcampsController.createBootcamp = async (req, res, next) => {
  const data = req.body

  try {
    const bootcamp = await Bootcamp.create(data)
    return res.json(bootcamp)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
//Lista los Bootcamps
BootcampsController.findAllBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
    return res.json(bootcamp)
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

BootcampsController.findById = async (req, res, next) => {
  const { id } = req.params
  try {
    const bootcamp = await Bootcamp.findByPk(
      id,
      {
        include: [
          {
            model: User_bootcamp

          }
        ]
      })

    if (!bootcamp) {
      return res.status(404).json({ message: 'Bootcamp no encontrado' })
    }
    return res.json(bootcamp)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}


export { BootcampsController }