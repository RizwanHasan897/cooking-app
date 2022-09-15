import React from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
function App() {
  return (
    <RecipeList recipes={sampleRecipe} />
  )
}

const sampleRecipe = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1.45',
    instrucntions: '1. Put salt on chicken \n 2. Put chicken in oven \n3. Eat chicken',
    ingredient: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'salt',
        amount: '2 tbs'
      }
    ]
  },
  {
    id: 1,
    name: 'Plain Beef',
    servings: 5,
    cookTime: '0.45',
    instrucntions: '1. Put Paprika on Beef \n 2. Put beef in oven \n3. Eat Beef',
    ingredient: [
      {
        id: 1,
        name: 'beef',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'paprika',
        amount: '2 tbs'
      }
    ]
  },
]

export default App;
