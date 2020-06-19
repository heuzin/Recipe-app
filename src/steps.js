import { updateSteps } from './recipes'
import { initializePostPage } from './views'

initializePostPage()

const stepElement = document.querySelector('#recipe-steps')

const ids = location.hash.substring(1).split('?')
const recipeId =ids[0]
const stepId = ids[1]

stepElement.addEventListener('input', (e) => {
    updateSteps(recipeId, stepId, e.target.value)
})