import uuidv4 from 'uuid/v4'
import { getRecipes } from './recipes'

const recipes = getRecipes()
let steps = recipes.steps

const loadSteps = () => {
    const stepsJSON = localStorage.getItem('steps')

    try {
        return stepsJSON != null ? JSON.parse(stepsJSON) : []
    } catch(e) {
        return []
    }
}

const saveSteps = () => {
    localStorage.setItem('steps', JSON.stringify(steps))
}

const getSteps = () => steps

const createSteps = () => {
    const id = uuidv4()

    steps.push({
        id: id,
        steps: []
    })
    saveSteps()

    return id
}

steps = loadSteps()

export { loadSteps, saveSteps, getSteps, createSteps }