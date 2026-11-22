// เอฟเฟกต์เลื่อนหน้าเว็บไซต์แบบ Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});
sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
// คลิกที่รูปภาพเพื่อขยาย
document.querySelectorAll('.portfolio-image').forEach(image => {
    image.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.className = 'image-popup';
        popup.innerHTML = `
            <span class="close-popup">&times;</span>
            <img src="${this.src}" alt="${this.alt}">
        `;
        document.body.appendChild(popup);
        popup.addEventListener('click', function() {
            popup.remove();
        });
    });
});
// แสดงปีปัจจุบันใน Footer
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML += `<br>© ${new Date().getFullYear()} Portfolio`;
}
// ข้อความต้อนรับ
console.log("Welcome to My Portfolio!");
