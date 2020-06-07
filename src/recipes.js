import uuidv4 from 'uuid/v4'

let recipes = [{
    ingridients: []
}]

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
    localStorage.getItem('recipes', JSON.stringify(recipes))
}

// Expose recipes from module
const getRecipes = () => recipes

const createRecipes = () => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
    })
}