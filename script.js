// Nav bar background change on scroll
window.addEventListener('scroll', function() {
const header = document.querySelector('header');
if (window.scrollY > 50) {
header.style.backgroundColor = '#000000';
header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
} else {
header.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
header.style.boxShadow = 'none';
}
});
