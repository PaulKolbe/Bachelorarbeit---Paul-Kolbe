const express = require('express')
const app = express()
const port = 3000

const matricualtionNumbers = [
    "762400",
    "762401",
    "762403",
    "762404",
    "762405",
]

app.get('/', (req, res) => {
  const matNuber = req.query.matriculation

  if (matricualtionNumbers.includes(matNuber)) res.send(true)
  else res.send("false")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})