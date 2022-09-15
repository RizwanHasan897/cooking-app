import React from 'react'
import IngredientList from './IngredientList'


export default function Recipe(props) {
    const {
        name,
        cookTime,
        servings,
        instrucntions,
        ingredient
    } = props
    return (
        <div>
            <div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions</span>
                <div>{instrucntions}
                </div>
            </div>
            <div>
                <span>Ingredient:</span>
                <div>
                    <IngredientList ingredient={ingredient} />
                </div>
            </div>

        </div>
    )
}
