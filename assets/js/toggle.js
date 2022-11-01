const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle)
addEventListener('load', () => { bsCollapse.toggle() })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})