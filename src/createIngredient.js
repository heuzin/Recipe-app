import { createIngredient } from './recipes'
import { renderIngredients } from './views'

renderIngredients()

const recipeId = location.hash.substring(1)

const createIngredientElement = document.querySelector('#add-ingredient-from')

createIngredientElement.addEventListener('submit', (e) => {

    createIngredient(recipeId)
    location.assign(`/createIngredient.html#${recipeId}`)
})