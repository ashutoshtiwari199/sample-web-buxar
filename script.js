const menu = document.getElementById('hamburger-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuItemsDiv = document.getElementById('menu-items');

// menu-items

menu.addEventListener('click', ()=>{
    // alert('open')
    menuItemsDiv.classList.remove("right-[100%]");
    // menu.classList.remove('bg-orange-300')
    // close-menu
})

closeMenuBtn.addEventListener('click', ()=>{
    menuItemsDiv.classList.add("right-[100%]");
    // alert('closed')
    // close-menu
})
