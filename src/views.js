import { getRecipes } from "./recipes"
import { getFilters } from "./filters"

const generateRecipeDom = (recipe) => {
    const recipeEl = document.createElement('a')
    const textEl = document.createElement('p')

    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unamed recipe'
    }
    recipeEl.appendChild(textEl)

    recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)

    return recipeEl
}

const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')

    const filters = getFilters()
    const recipes = getRecipes()
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    recipesEl.innerHTML = ''

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach((recipe) => {
            const recipeEl = generateRecipeDom(recipe)
            recipesEl.appendChild(recipeEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        recipesEl.appendChild(emptyMessage)
    }
}

const renderSteps = () => {
    const stepsEl = document.querySelector('#steps')
    
    const ids = location.hash.substring(1).split('?')
    const recipeId =ids[0]
    const stepId = ids[1]
  
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    
    stepsEl.innerHTML = ''
    let count = 1
    
    if (recipe.steps.length > 0) {
        recipe.steps.forEach((step) => {        
            const stepEl = document.createElement('a')
            stepEl.textContent = `Step ${count}: ${step.description} `
            stepsEl.appendChild(stepEl)
            stepEl.setAttribute('href', `/steps.html#${recipeId}?${step.id}`)
            count++
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No step to show'
        stepsEl.appendChild(emptyMessage)
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

const initializePostPage = () => {
    const stepElement = document.querySelector('#recipe-steps')

    const ids = location.hash.substring(1).split('?')
    const recipeId =ids[0]
    const stepId = ids[1]

    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    let step = recipe.steps.find((step) => step.id === stepId)

    stepElement.value = step.description
}

export { generateRecipeDom, renderRecipes, initializeEditPage, initializePostPage, renderSteps }