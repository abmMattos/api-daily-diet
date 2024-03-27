const express = require('express')
const cors = require("cors")

const routes = require("./routes")

const app = express()
app.use(express.json())

app.use(routes)
app.use(cors)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`)
)