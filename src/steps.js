import uuidv4 from 'uuid/v4'
import { getRecipes, saveRecipes } from './recipes'

const recipes = getRecipes()

const createSteps = (recipeId) => {
    const recipe = recipes.filter((recipe) => recipe.id === recipeId)
    const id = uuidv4()

    recipe[0].steps.push({
        id: id,
        steps: ''
    })
    saveRecipes()

    return id
}

export { createSteps }