const express = require('express')
const cocktailController = require('./controllers/CocktailController')
const mocktailController = require('./controllers/MocktailController')


const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) =>{
  res.send({msg: 'server running'})
})

app.get('/cocktails', cocktailController.getCocktails)

app.get('/mocktails', mocktailController.getMocktails)


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})