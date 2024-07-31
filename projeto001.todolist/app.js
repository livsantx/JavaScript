'use strict';

 const criarItem = (text, status='') => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `<label class="todo_item">
        <input type="checkbox" ${status}>
        <div>${text}</div>
        <input type="button" value="X">
     </label>
    `
    document.getElementById('todoList').appendChild(item);

}