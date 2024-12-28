import * as db from '../models/index.cjs'
const { User_bootcamp } = db.default

const UserBootcampController = {}

UserBootcampController.addUser = async (req, res, next) => {

  const data = req.body
  try {
    const userBoot = await User_bootcamp.create(data)
    return res.json(userBoot)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ Message: 'Internal Server Error' })
  }
}

UserBootcampController.allUserBootcamp = async (req, res, next) => {
  try {
    const userBoot = await User_bootcamp.findAll()
    return res.json(userBoot)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ Message: 'Internal Server Error' })
  }
}

export { UserBootcampController }