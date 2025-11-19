// assets/js/script.js - small interactivity and animations
document.addEventListener('DOMContentLoaded', function(){
  // Simple floating animation on hero
  const hero = document.querySelector('.hero-inner');
  if(hero){
    let t = 0;
    setInterval(()=>{
      t += 0.02;
      hero.style.transform = `translateY(${Math.sin(t)*4}px)`;
    }, 20);
  }

  // Simple click handler for demo buttons (they link to login)
  document.querySelectorAll('.btn-yellow, .btn-primary, .btn-outline').forEach(b => {
    b.addEventListener('click', (e) => {
      // if link goes to login.html, allow navigation. else show demo
      const href = b.getAttribute('href');
      if(!href || href === '#') e.preventDefault();
    });
  });
});