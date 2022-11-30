window.onload = ()=>{
    render();
}

function render(){
    if (todoList.length==0){
        document.querySelector('.todo-list').classList.add('hidden');
        document.querySelector('.footer').classList.add('hidden');
        document.querySelector('.toggle-all').classList.add('hidden');
    }
    
}

let todoList = [];
let task='';
let counter = document.querySelector('.todo-count').getElementsByTagName('strong')[0];
// let state = false; 

function build(_event){
    if (_event.key === 'Enter'){
        addTask();

    }else{
        task = `${inputTask.value}`;
        console.log(task); 
    } 
}

function renderDisplay(){
    task = '';
    inputTask.value = '';
    counter.innerHTML = todoList.length;
}

function addTask(){
    document.querySelector('.todo-list').classList.remove("hidden");
    document.querySelector('.footer').classList.remove("hidden");
    document.querySelector('.toggle-all').classList.remove('hidden');
    let ul= document.querySelector('.todo-list');
    let li = document.querySelector('.todo-li');
    if (todoList.length==0){
        li.getElementsByTagName('label')[0].innerHTML = task;
        li.querySelector('.destroy').setAttribute('id','0');
        li.setAttribute('id','li0');
    }else{
        let newli = li.cloneNode(true);
        let newLi = ul.appendChild(newli);
        newLi.getElementsByTagName('label')[0].innerHTML = task; 
        newLi.querySelector('.destroy').setAttribute('id',String(todoList.length));
        newLi.setAttribute('id','li'+String(todoList.length));
    }
    todoList.push(task);
    addDelLiseten();
    renderDisplay();
}

const inputTask = document.querySelector('.new-todo');
inputTask.addEventListener('keyup', build);



function addDelLiseten(){
        let del = Array.from(document.querySelectorAll('.destroy')); 
        del[del.length-1].addEventListener('click', (e) =>  delTask(e) ); 
} 



function delTask(e){
    if (todoList.length==1){
        document.querySelector('.todo-list').classList.add('hidden');
        document.querySelector('.footer').classList.add('hidden');
        document.querySelector('.toggle-all').classList.add('hidden');
    }else{
        document.querySelector(`#li${e.target.id}`).remove();
    } 
    indexForRemoval = e.target.id
    todoList.splice(indexForRemoval,1);
    renderDisplay();
}
