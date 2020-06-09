import { getRecipes } from "./recipes"

const generateRecipeDom = (recipe) => {
    const recipeEl = document.createAttribute('a')
    const textEl = document.createElement('p')

    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unamed recipe'
    }
    recipeEl.appendChild(textEl)

    return recipeEl
}

const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')
    const recipes = recipes.title

    recipesEl.innerHTML = ''

    if (recipes.length > 0) {
        recipes.forEach((recipe) => {
            const recipeEl = generateRecipeDom(recipe)
            recipesEl.appendChild(recipeEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        recipesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (recipeId) => {
    const titleElement = document.querySelector('#note-title')
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)

    if (!recipe) {
        location.assign('/index.html')
    }

    titleElement.value = recipe.title
}

export { generateRecipeDom, renderRecipes, initializeEditPage }