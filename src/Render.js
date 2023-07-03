import MakeToDo from "./MakeToDo";


function Render(){
    let toDoNotes = [];

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate  = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    
    let notes = new MakeToDo(title, description, dueDate, priority);
          toDoNotes.push(notes);
    
        let toDoCard = document.querySelector('#toDoCard');   
       // toDoCard.innerHTML = "";
    
        for(let i =0; i<toDoNotes.length; i++){
            //console.log(toDoNotes[i]);
            let book = toDoNotes[i]
            let bookEl = document.createElement('div');
            bookEl.innerHTML = `
            <div id="card">
            <p><h4>Title: ${book.title}</h4></p>
            <p> Description: ${book.description}</p>
            <p>Due Date: ${book.dueDate}</p>
            <p>Priority: ${book.priority}</p>
             </div>
            `
            
           toDoCard.appendChild(bookEl);
    
    
        }
    //alert(title.value);
    
    }

    export default Render;