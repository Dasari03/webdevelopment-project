const form = document.querySelector(".form")
const list = document.querySelector(".list")
const input = document.getElementById("input")

console.log(form);
console.log(input);
console.log(list);

const todolist = loadLocalStrorage();


form.addEventListener('submit', e => {
    e.preventDefault();

console.log(input.value);
addToHTML();

    
})

//add user input into the list & save to local storage
function addToHTML(){
    const container = document.createElement("div")
   container.append(input.value)
   saveToLocalStorage(input.value)
   list.append(container)
   return input.value
}

function saveToLocalStorage(todo){
    todolist.push(todo)
    localStorage.setItem('TASK', JSON.stringify(todolist))
    console.log('****************');
    console.log(localStorage.getItem('TASK'));
}

function loadLocalStrorage(){
    if(JSON.parse(localStorage.getItem('TASK')) == null)
    return []
    
    return JSON.parse(localStorage.getItem('TASK'));
    
    
}

