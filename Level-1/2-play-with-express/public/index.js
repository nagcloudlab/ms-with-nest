


const topFiveTodosBtn = document.getElementById('top-five-todos-btn')
topFiveTodosBtn.addEventListener('click', e => {
    fetch("/api/todos?limit=5")
        .then(response => response.json())
        .then(todos => {
            const elements = todos.map(todo => {
                return `
                    <li class="list-group-item">
                        <span>${todo.id}</span>
                        <span>${todo.title}</span>
                        <span>${todo.completed}</span>
                    </li>
                `
            })
            document.getElementById('todos').innerHTML = elements.join("")
        })
})