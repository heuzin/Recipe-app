import { createRecipes } from './recipes'

document.querySelector('#add-recipe-from').addEventListener('submit', (e) => {
    e.preventDefault();
    createRecipes()
    location.assign('/index.html')
})