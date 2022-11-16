const getCocktails = (req, res) => {
  res.send(
      {
        drinkName: "Margarita",
        glassType: "Cocktail glass",
        instructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        drinkThumbnail: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        primaryIngredient: "Tequila",
      }
  )
}




module.exports = {
  getCocktails
}