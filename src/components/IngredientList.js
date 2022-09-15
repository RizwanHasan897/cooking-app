import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredient }) {
    const IngredientElement = ingredient.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient} />
    })

    return (
        <div>
            {IngredientElement}
        </div>
    )
}
