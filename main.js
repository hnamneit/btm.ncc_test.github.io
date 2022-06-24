const $ = document.querySelector.bind(document)
const sidebar = $('.sidebar')
const nav_menu = $('.nav_icon ul')
const nav_bar = $('.nav_icon')
const nav_close_icon = $('.fa-xmark')
const nav_bar_icon = $('.fa-bars')

document.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    const documentWidth = document.body.scrollWidth
    if(documentWidth < 1024) {
        console.log(sidebar.offsetWidth-scrollTop/sidebar.offsetWidth)
        sidebar.style.opacity = (sidebar.offsetWidth-scrollTop)/sidebar.offsetWidth
    }
}

nav_bar_icon.onclick = () => {
    nav_menu.style.display = 'block'
    nav_menu.style.transform = 'translateX(0)'
    nav_bar_icon.style.display = 'none'
    nav_close_icon.style.display = 'block'
    
}

nav_close_icon.onclick = () => {
    nav_menu.style.display = 'none'
    nav_menu.style.transform = 'translateX(100%)'
    nav_bar_icon.style.display = 'block'
    nav_close_icon.style.display = 'none'
}
