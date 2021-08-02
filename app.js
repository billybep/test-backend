if (process.env.NODE_ENV !== "production") require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')

// app.get('/', (req, res) => res.send('test backend'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.use((err, req, res, next) => {
  console.log(err,'error handler')
})

app.listen(port, _ => console.log(`Example app listening at http://localhost:${port}`))

