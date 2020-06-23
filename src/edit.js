import { initializeEditPage, renderSteps } from "./views"
import { updateRecipe, removeRecipe, createSteps } from "./recipes"

renderSteps()

const titleElement = document.querySelector('#note-title')
const removeElement = document.querySelector('#remove-recipe')
const addStepsElement = document.querySelector('#add-steps')
const addIngredientsElement = document.querySelector('#add-ingredents')
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

titleElement.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
})

removeElement.addEventListener('click', (e) => {
    removeRecipe(recipeId)
    location.assign('/index.html')
})

addStepsElement.addEventListener('click', (e) => {
    // const stepId = createSteps(recipeId)
    // location.assign(`/steps.html#${recipeId}?${stepId}`)
    location.assign(`/createStep.html#${recipeId}`)
})

addIngredientsElement.addEventListener('click', (e) => {
    location.assign(`/createIngredient.html#${recipeId}`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        initializeEditPage(recipeId)
    }
})