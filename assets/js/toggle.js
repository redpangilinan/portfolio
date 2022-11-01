const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle)
addEventListener('scroll', () => { bsCollapse.hide() })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.hide() })
})