import React from 'react'

export default function RecipeIngredientEdit(props) {
    const {
        ingredient,
        handelIngredientChange,
        handelIngredientDelete
    } = props

    function handelChange(changes) {
        handelIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }

    return (
        <>
            <input
                className='recipe-edit__input'
                type="text"
                onInput={(e) => handelChange({ name: e.target.value })}
                value={ingredient.name}
            />
            <input
                className='recipe-edit__input'
                type="text"
                onInput={(e) => handelChange({ amount: e.target.value })}
                value={ingredient.amount}
            />
            <button
                className='btn btn--danger'
                onClick={() => handelIngredientDelete(ingredient.id)}
            >
                &times;
            </button>
        </>
    )
}
