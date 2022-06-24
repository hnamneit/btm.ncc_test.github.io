const $ = document.querySelector.bind(document)
const sidebar = $('.sidebar')
document.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    const documentWidth = document.body.scrollWidth
    if(documentWidth < 1024) {
        console.log(sidebar.offsetWidth-scrollTop/sidebar.offsetWidth)
        sidebar.style.opacity = (sidebar.offsetWidth-scrollTop)/sidebar.offsetWidth
    }
}