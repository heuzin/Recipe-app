import uuidv4 from 'uuid/v4'

let recipes = []


// Read existing recipes from localStorage
const loadRecipes = () => {
    // Check for existing saved data READ - CHEACK - PARSE
    const recipesJSON = localStorage.getItem('recipes')

    try {
        return recipesJSON != null ? JSON.parse(recipesJSON) : []
    } catch(e) {
        return []
    }
}

// Save recipes to localStorage
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// Expose recipes from module
const getRecipes = () => recipes

const createRecipes = (e) => {
    const id = uuidv4()

    const titleElemnt = document.querySelector('#add-recipe-from')

    recipes.push({
        id: id,
        title: titleElemnt.elements['recipe-title'].value,
        steps: [],
        ingredients: []
    })
    saveRecipes()

    return id
}

const createSteps = (recipeId) => {
    const recipes = getRecipes()
    const recipe = recipes.filter((recipe) => recipe.id === recipeId)
    const id = uuidv4()

    const descriptionElement = document.querySelector('#create-step-form')

    recipe[0].steps.push({
        id: id,
        description: descriptionElement.elements['create-recipe-steps'].value
    })
    saveRecipes()

    return id
}

const createIngredient = (recipeId) => {
    const recipes = getRecipes()
    const recipe = recipes.filter((recipe) => recipe.id === recipeId)
    const id = uuidv4()

    const ingredientNameElement = document.querySelector('#add-ingredient-from')

    recipe[0].ingredients.push({
        id: id,
        ingredientName: ingredientNameElement.elements['recipe-ingredient'].value
    })
    saveRecipes()

    return id
}

// Remove a recipe 
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) =>recipe.id === id)

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}

const removeStep = (recipeId ,stepId) => {
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    let step = recipe.steps.find((step) => step.id === stepId)
    const stepIndex = recipe.steps.findIndex((step) => step.id === stepId)

    if (stepIndex > -1) {
        recipe.steps.splice(stepIndex, 1)
        saveRecipes()
    }
}

const removeIngredient = (recipeId, ingredientId) => {
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    let ingredients = recipe.ingredients.find((ingredient) => ingredient.id === ingredientId)
    const ingredientIndex = recipe.ingredients.findIndex((ingredient) => ingredient.id === ingredientId)

    if (ingredientIndex > -1) {
        recipe.ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}

const updateRecipe = (id, updates) => {
    const recipe = recipes.find((recipe) => recipe.id === id)

    if (!recipe) {
        return
    }

    if (typeof updates.title === 'string') {
        recipe.title = updates.title
    }

    saveRecipes()
    return recipe
}

const updateSteps = (recipeId, stepId, description) => {
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    let step = recipe.steps.find((step) => step.id === stepId)
    step.description = description
    saveRecipes()
}

const updateIngredient = (recipeId, ingredientId, ingredientName) => {
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    let ingredient = recipe.ingredients.find((ingredient) => ingredient.id === ingredientId)
    ingredient.ingredientName = ingredientName
    saveRecipes()
}

recipes = loadRecipes()

export { loadRecipes, saveRecipes, getRecipes, createRecipes, createSteps, createIngredient, removeRecipe, removeStep, removeIngredient, updateRecipe, updateSteps, updateIngredient }