const getMocktails = (req, res) => {
  res.send(
      {
        drinkName: "Alice Cocktail",
        glassType: "Cocktail glass",
        instructions: "Shake well, strain into a large cocktail glass.",
        drinkThumbnail: "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        primaryIngredient: "Pineapple juice"
      }
  )
}




module.exports = {
  getMocktails
}