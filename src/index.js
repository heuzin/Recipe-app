import { renderRecipes } from "./views";
import { createRecipes } from "./recipes";
import { setFilters } from "./filters";

renderRecipes()

document.querySelector('#create-recipe-button').addEventListener('click', (e) => {
    // const id = createRecipes()
    // location.assign(`/edit.html#${id}`)
    location.assign('/createRecipe.html')
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        renderRecipes()
    }
})