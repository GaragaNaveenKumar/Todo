let items=JSON.parse(localStorage.getItem('items')) || []

function saveToLocalStorage(){
    localStorage.setItem('items',JSON.stringify(items));
}

function display(){
    const list=document.getElementById('list');list.innerHTML='';
    if (items.length==0){
        list.innerHTML="No tasks to do";
        return 
    }
    items.forEach((element,index) => {
         const div=document.createElement("div");
         const li=document.createElement("li");
        li.textContent=element;
        const btn=document.createElement('button');
        btn.textContent='Delete';
        btn.onclick=function(){
            deleteItem(index);
        }

        div.appendChild(li);
        div.appendChild(btn);
        list.appendChild(div);
        
    });
    function deleteItem(index){
        items.splice(index,1);
        
        saveToLocalStorage();
        display();
    }
}
    document.getElementById('itemform').addEventListener('submit',function(event){
        event.preventDefault();
        const taskInput=document.getElementById('task-input');
        const task=taskInput.value.trim()
        if (!task){
            alert('Please enter your task to add');

        }else{
            items.push(task);
            saveToLocalStorage();
            display();
            taskInput.value='';
        }
    })

    display();
