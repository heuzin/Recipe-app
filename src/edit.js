import { initializeEditPage } from "./views"
import { updateRecipe } from "./recipes"

const titleElement = document.querySelector('#note-title')
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

titleElement.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
})