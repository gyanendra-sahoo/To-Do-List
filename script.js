let submit = document.querySelector('.submit');
let del = document.querySelector(".delete");
let input = document.querySelector("input");
let ul = document.querySelector('ul');

submit.addEventListener("click",function() {
    if(input.value==""){
        input.placeholder="Sorry enter the valid task";
    }else{
        let div = document.createElement('div');
        let li = document.createElement('li');
        let delBtn = document.createElement('button');
        delBtn.innerText="delete";
        li.innerText=input.value;
        ul.appendChild(div);
        div.appendChild(li);
        div.appendChild(delBtn);
        div.classList.add("itembox");
        delBtn.classList.add("del");
        input.value="";
        console.log("added");
        input.placeholder="Enter the task to the list"
    }
});

ul.addEventListener("click",function(e) {
    if(e.target.nodeName == "BUTTON"){
    let listitem =e.target.parentElement;
    listitem.remove();
    }
});
