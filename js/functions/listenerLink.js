let my = document.getElementById("my"),
    dad = document.getElementById("dad"),
    mom = document.getElementById("mom"),
    title = document.getElementById('title');
  
let arrListLink = [my, dad, mom];

function link(arr) {

    title.textContent = 'Мои дела'
    for (const item of arr) {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            if (item.id == 'my') {
                title.textContent = 'Мои дела'
            } else if (item.id == 'dad') {
                title.textContent = 'Дела папы'      
            } else {
                title.textContent = 'Дела мамы'
            }
        });
    }
}
link(arrListLink);