import { where } from 'sequelize'
import * as db from '../models/index.cjs'

const { Users, Bootcamp, User_bootcamp } = db.default

const UsersController = {}

//Crea Usuarios
UsersController.createUser = async (req, res, next) => {
  const data = req.body

  try {
    const user = await Users.create(data)
    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }

}

// busca todo los usuarios
UsersController.findAll = async (req, res, next) => {
  try {
    const users = await Users.findAll(
      {
        attributes: {
          order: [
            ['id', 'ASC']
          ],
          exclude: [
            "createdAt",
            "updatedAt",
          ]
        },
        include: [
          {
            model: User_bootcamp,
            attributes: {
              exclude: [
                "user_id",
                "bootcamp_id",
                "createdAt",
                "updatedAt",
              ],
            },
            include: [
              {
                model: Bootcamp,
                attributes: {
                  exclude: [
                    "createdAt",
                    "updatedAt",
                  ],
                }
              }
            ]
          }
        ]
      }
    )
    return res.json(users)
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

// /usuarios/:id
UsersController.findUserById = async (req, res, next) => {
  const { id } = req.params
  try {
    const user = await Users.findByPk(
      id,
      {
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
          ]
        },
        include: [
          {
            model: User_bootcamp,
            attributes: {
              exclude: [
                "user_id",
                "bootcamp_id",
                "createdAt",
                "updatedAt",
              ],
            },
            include: [
              {
                model: Bootcamp,
                attributes: {
                  exclude: [
                    "createdAt",
                    "updatedAt",
                  ],
                }
              }
            ]
          }
        ]
      }
    )
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    return res.json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Serve Error' })
  }
}

// delete /usuarios/:id

UsersController.deleteUserById = async (req, res, next) => {
  const { id } = req.params
  try {
    const user = await Users.destroy({ where: { id } })
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    return res.json({ message: 'Usuario Eliminado' })
  } catch (err) {
    return res.status(500).json({ message: 'Internal Serve Error' })
  }
}

// actualizar  /usuarios/:id
UsersController.updateUserById = async (req, res, next) => {
  const data = req.body
  const { id } = req.params

  try {
    const user = await Users.update(data, { where: { id } })
    if (user[0] == 0) {
      return res.status(404).json({ message: 'Usuario no actualizado' })
    }
    return res.status(201).json({ message: 'Usuario actualizado' })
  } catch (err) {
    return res.status(500).json({ message: ' Internal Server Error' })
  }
}

/* "firstName": "Mateo",
        "lastName": "Díaz", */

export { UsersController }