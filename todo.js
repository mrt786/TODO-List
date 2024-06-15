let btn = document.querySelector('button')
let input = document.querySelector('input')
function getStringBeforeWord(str, word) {
    let index = str.indexOf(word);
    if (index !== -1) {
        return str.substring(0, index);
    }
    return str; // or handle the case where the word is not found
}

function addTask() { 
    // let input = document.querySelector('input')
    console.dir(input.value)
    if (input.value != "") {
        let li = document.createElement('li')
        li.innerText = input.value
        let listItems = document.querySelectorAll('li')
        let check = true

        for (let i = 0; i < listItems.length; i++) {
            let str = listItems[i].innerText
            str = getStringBeforeWord(str, "\n");
            if ((li.innerText == str || str.toLowerCase() == li.innerText.toLowerCase())) {
                    check = false
                    alert("Task is already present in TODO list")
                    break;
                }
            
        }

        if (check == true)
        {   
            document.querySelector('ol').append(li)
            let btn = document.createElement('button')
            btn.innerText = "Delete"
            li.appendChild(btn)
        }
    }
    else
    {
        alert('Cannot add Empty Task to TODO list')
    }
}
btn.addEventListener('click',addTask)
function addTodo(event)
{
    console.dir(event.key)

    if(event.key == "Enter")
    { 
        addTask()
    }
}
input.addEventListener('keydown',addTodo)

let ol = document.querySelector('ol')
ol.addEventListener("click",function (event) {
    if(event.target.nodeName == "BUTTON")
    {
        let li = event.target.parentElement
        li.remove()
    }
})