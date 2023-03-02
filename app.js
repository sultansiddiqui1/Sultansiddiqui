const hamburgerButton=document.getElementById('hamburger')
const navList= document.getElementById('nav-list')

function togglebutton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',togglebutton)
