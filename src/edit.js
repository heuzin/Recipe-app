import { initializeEditPage } from "./views"

const titleElement = document.querySelector('#note-title')
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

