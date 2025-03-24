import { app } from './src/server.js'
const port = 3000

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})