import { renderRecipes } from "./views";
import { createRecipes } from "./recipes";

renderRecipes()

document.querySelector('#create-recipe-button').addEventListener('click', (e) => {
    const id = createRecipes()
    location.assign(`/edit.html#${id}`)
})