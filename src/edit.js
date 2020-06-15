import { initializeEditPage } from "./views"
import { updateRecipe, removeRecipe } from "./recipes"

const titleElement = document.querySelector('#note-title')
const removeElement = document.querySelector('#remove-recipe')
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

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        initializeEditPage(recipeId)
    }
})