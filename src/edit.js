import { initializeEditPage } from "./views"
import { updateRecipe, removeRecipe } from "./recipes"

const titleElement = document.querySelector('#note-title')
const removeElement = document.querySelector('#remove-recipe')
const addStepsElement = document.querySelector('#add-steps')
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
    const id = createSteps()
    location.assign(`/steps.html`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        initializeEditPage(recipeId)
    }
})