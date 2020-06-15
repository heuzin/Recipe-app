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

const createRecipes = () => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        steps: '',
        ingridients: []
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

const updateRecipe = (id, updates) => {
    const recipe = recipes.find((recipe) => recipe.id === id)

    if (!recipe) {
        return
    }

    if (typeof updates.title === 'string') [
        recipe.title = updates.title
    ]

    saveRecipes()
    return recipe
}

recipes = loadRecipes()

export { loadRecipes, saveRecipes, getRecipes, createRecipes, removeRecipe, updateRecipe }