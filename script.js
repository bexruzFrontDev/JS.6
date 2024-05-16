let todos = [];
let todosHTML = '';
let complHTML = '';
let todosDIV = document.querySelector('.todos');
let Todfos2 = document.querySelector('.todo_2');
let url = 'https://jsonplaceholder.typicode.com/todos/';

const getTodos = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        todos = data;
        displayTodos();
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

const displayTodos = () => {
    const notCompltodo = todos.filter(todo => !todo.completed);
    const complatedtodo = todos.filter(todo => todo.completed);

    notCompltodo.forEach(item => {
        todosHTML += `
            <div class="todo">
                <h2>${item.title}</h2>
                <p class="red">Не сделал</p>
            </div>
        `;
    });

    complatedtodo.forEach(item => {
        complHTML += `
            <div class="todo">
                <h2>${item.title}</h2>
                <p class="green">Сделал</p>
            </div>
        `;
    });

    todosDIV.innerHTML = todosHTML;
    Todfos2.innerHTML = complHTML;
}

getTodos();
