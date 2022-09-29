import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'


export default function RecipeEdit({ recipe }) {
  const { handelRecipeChange, handelRecipeSelect } = useContext(RecipeContext)

  function handelChange(changes) {
    handelRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  function handelIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handelChange({ ingredients: newIngredients })

  }

  function handelIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }
    handelChange({ ingredients: [...recipe.ingredients, newIngredient] })
  }

  function handelIngredientDelete(id) {
    handelChange({
      ingredients: recipe.ingredients.filter(i => i.id !== id)
    })
  }

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button
          className='btn recipe-edit__remove-button'
          onClick={() => handelRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label
          htmlFor='name'
          className='recipe-edit__label'>
          Name
        </label>
        <input
          type="text"
          name='name'
          id='name'
          value={recipe.name}
          onInput={e => handelChange({ name: e.target.value })}
          className='recipe-edit__input' />
        <label
          htmlFor='cookTime'
          className='recipe-edit__label'>
          Cook Time
        </label>
        <input
          type="text"
          name='cookTime'
          id='cookTime'
          value={recipe.cookTime}
          onInput={e => handelChange({ cookTime: e.target.value })}
          className='recipe-edit__input' />
        <label
          htmlFor='servings'
          className='recipe-edit__label'>
          Servings
        </label>
        <input
          type="number"
          min="1"
          name='servings'
          value={recipe.servings}
          onInput={e => handelChange({ servings: parseInt(e.target.value) || "" })}
          id='servings'
          className='recipe-edit__input' />
        <label
          htmlFor='instructions'
          className='recipe-edit__label'>
          Instructions
        </label>
        <textarea
          name='instructions'
          className='recipe-edit__input'
          value={recipe.instructions}
          onInput={e => handelChange({ instructions: e.target.value })}
          id='instructions' />
      </div>
      <br />
      <label className='recipe-edit__label'>Ingredient</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handelIngredientChange={handelIngredientChange}
            handelIngredientDelete={handelIngredientDelete}
            ingredient={ingredient} />

        ))}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container '>
        <button
          className='btn btn--primary'
          onClick={() => handelIngredientAdd()}
        >
          Add Ingrediant
        </button>
      </div>

    </div>
  )
}
