import { createSteps } from './recipes'

const recipeId = location.hash.substring(1)

const createStepElement = document.querySelector('#create-step-form')

createStepElement.addEventListener('submit', (e) => {
    e.preventDefault()
    // const stepId = createSteps(recipeId)
    // location.assign(`/steps.html#${recipeId}?${stepId}`)
    createSteps(recipeId)
    location.assign('/index.html')
})