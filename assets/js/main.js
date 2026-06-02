
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){ menuBtn.addEventListener('click',()=>navLinks.classList.toggle('show')); }
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); }); },{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>navLinks && navLinks.classList.remove('show')));
