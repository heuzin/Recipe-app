import { initializeIngredientsPage } from './views'
import { updateIngredient, removeIngredient } from './recipes'

initializeIngredientsPage()

const ingredientElement = document.querySelector('#recipe-ingredient')
const removeElement = document.querySelector('#remove-ingredient')

const ids = location.hash.substring(1).split('?')
const recipeId =ids[0]
const ingredientId = ids[1]

ingredientElement.addEventListener('input', (e) => {
    updateIngredient(recipeId, ingredientId, e.target.value)
})

removeElement.addEventListener('click', (e) => {
    removeIngredient(recipeId, ingredientId)
    location.assign('/index.html')
})