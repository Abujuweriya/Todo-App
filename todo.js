const inputField = document.querySelector('.input-task');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.filter');
const tasks = document.querySelector('.tasks');
const removeAllBtn = document.querySelector('.clear-tasks');
const msgBox = document.querySelector('.msg');

// all eventlisteners
form.addEventListener('submit', addTask)
tasks.addEventListener('click', removeItem)
removeAllBtn.addEventListener('click', removeAll)
searchInput.addEventListener('keyup', searchTask)



function addTask(e) {
    console.log(inputField.value)
    if (inputField.value === '') {
        alert('empty task')
    }
    else {
        // create li
        const li = document.createElement('li');
        li.classList = 'task';
        //add text to new task
        li.appendChild(document.createTextNode(inputField.value))

        // create div
        const icons = document.createElement('div');
        icons.classList = 'icons';
        //create remove link
        const remove = document.createElement('a');
        remove.classList = 'remove';
        remove.innerText = '🛑';
        const done = document.createElement('a');
        done.classList = 'done';
        done.innerText = '✅';


        //append icons to the div
        icons.appendChild(remove);
        icons.appendChild(done);
        console.log(icons);

        console.log(icons);
        // append div to li 
        li.appendChild(icons)

        //append li in to ul
        tasks.appendChild(li);
        inputField.value = '';
        msgBox.style.display = 'none';


    }

    e.preventDefault();
}

//delete task
function removeItem(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.classList.contains('done')) {
        e.target.parentElement.parentElement.style.background = '#9dd9d2';
        e.target.parentElement.parentElement.style.color = '#9fff';

    }
}

//delete all tasks
function removeAll(e) {
    if (confirm('Are you sure'))
        while (tasks.firstChild) {
            tasks.removeChild(tasks.firstChild);
        }

}

//search task
function searchTask(e) {
    const textInput = e.target.value.toLowerCase();

    document.querySelectorAll('.task').forEach(
        function (items) {
            const item = items.firstChild.textContent;
            if (item.toLowerCase().indexOf(textInput) != -1) {
                items.style.display = 'block';
            } else {
                items.style.display = 'none';
            }
        }
    )

}