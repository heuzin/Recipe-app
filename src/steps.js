import uuidv4 from 'uuid/v4'
import { getRecipes } from './recipes'

const recipes = getRecipes()
let steps = recipes.steps

const loadSteps = () => {
    const stepsJSON = localStorage.getItem('recipes')

    try {
        return stepsJSON != null ? JSON.parse(stepsJSON) : []
    } catch(e) {
        return []
    }
}

const saveSteps = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const getSteps = () => steps

const createSteps = (recipeId) => {
    const recipe = recipes.filter((recipe) => recipe.id === recipeId)
    const id = uuidv4()

    console.log(recipe)
    recipe[0].steps.push({
        id: id,
        steps: ''
    })
    saveSteps()

    return id
}

steps = loadSteps()

export { loadSteps, saveSteps, getSteps, createSteps }