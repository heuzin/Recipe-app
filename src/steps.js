const stepElement = document.querySelector('#recipe-steps')

stepElement.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        steps: e.target.value
    })
})