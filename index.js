import express from 'express'
const app = express()
const port = 7000

app.get('/', (req, res) => {
  import('./math.js').then(math => {
    res.send(`hellow ${math.default(3, 2)}`)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})