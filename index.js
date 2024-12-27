import express from 'express'
import { BootcampRouter, UserRouter } from './router/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())

app.use("/usuarios", UserRouter)
app.use("/bootcamps", BootcampRouter)

app.listen(PORT, console.log(`App en el puerto ${PORT}`))

process.on('uncaughtException', (err) => {
  console.error(err)
})