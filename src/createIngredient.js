import { createIngredient } from './recipes'

const recipeId = location.hash.substring(1)

const createIngredientElement = document.querySelector('#add-ingredient-from')

createIngredientElement.addEventListener('submit', (e) => {
    e.preventDefault()
    createIngredient(recipeId)
    location.assign(`/edit.html#${recipeId}`)
})