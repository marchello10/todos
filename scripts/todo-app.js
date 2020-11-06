let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos,filters)

//listen for search input
document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text, //looks for a variable
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos,filters)
        e.target.elements.text.value = ''
    }
})

document.querySelector('#hide').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})


