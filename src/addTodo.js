
class ToDoBuilder{
    constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    }
    
   
 }
 

let container = document.querySelector('#container');
let toDoNotes = [];
function addTodo(){
    
    
    const todoForm = document.createElement('div');
    todoForm.id = 'todoForm';
    
    todoForm.innerHTML = `
    <input id='title' type = 'text' placeholder = 'Title'/>
    <input id='description' type = 'text' placeholder = 'Description'/>
    <input id='dueDate' type = 'date' placeholder = 'Due Date'/>
    <label for='priority'>Priority</label>
    <select id='priority'>
    <option value = 'Low'>Low</option>
    <option value = 'Medium'>Medium</option>
    <option value = 'High'>High</option>
    </select>
    <button id='submitButton'>Submit</button>
    `
    container.appendChild(todoForm);
    const titleInput = document.querySelector('#title').value;
    const describeInput = document.querySelector('#description').value;
    const dueDateInput = document.querySelector('#dueDate').value;
    const priorityInput = document.querySelector('#priority').value;

    const toDoNote = new ToDoBuilder(titleInput, describeInput, dueDateInput, priorityInput)

    toDoNotes.push(toDoNote);

    

}

export default addTodo;