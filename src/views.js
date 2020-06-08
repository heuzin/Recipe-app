const generateRecipeDom = (recipe) => {
    const noteEl = document.createAttribute('a')
    const textEl = document.createElement('p')

    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unamed recipe'
    }
    noteEl.appendChild(textEl)

    return noteEl
}