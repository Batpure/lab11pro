// defind
let input = document.getElementsByTagName('input')[0];
let addBtn = document.querySelector('.add');
let olEl = document.getElementsByTagName('ol')[0];
// action
let delBtn;
addBtn.addEventListener('click', ()=>{
    if(input.value == ""){
        alert("hooson baij bolh gui")
    }else{
        const li = document.createElement('li');
        li.innerText = input.value;
        olEl.appendChild(li);
        input.value= "";
        const delBtn = document.createElement('button');
        delBtn.innerHTML= '<i class="bi bi-trash"></i>';
        li.appendChild(delBtn);
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML= '<i class="bi bi-check"></i>';
        li.appendChild(checkBtn);
        delBtn.className = "del";
    }
    saveData();
});

olEl.addEventListener('click',(e)=>{
    console.log(e.target);
    let targetEl = e.target;
    let parentEl = targetEl.parentElement;
    let del = parentEl.parentElement;
    // parentElement -> tuhain tagiin gadnah tagiig gargaj irne
    // console.log((targetEl.parentElement).parentElement);
    if(targetEl.className == "bi bi-trash"){
        del.remove();
    }else if(targetEl.className == "bi bi-check"){
        // let li = document.getElementsByTagName('li')[0];
        // li.style.color = "green";
        del.classList.toggle("checked");
        // className classList --> tag der class shineer gargana
    }
    saveData();
});
// localStorage --> wed broeser deeer baidag data hadaglah sav
// set item() -> hadgalah  
// getItem() -> hadgalsnaa duudah
function saveData(){
    localStorage.setItem('todo',olEl.innerHTML);
}
function getData(){
    olEl.innerHTML = localStorage.getItem('todo')
}
getData();