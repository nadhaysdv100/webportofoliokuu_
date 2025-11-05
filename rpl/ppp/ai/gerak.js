// 2. Simple typing effect
const typedEl = document.getElementById('typed');
const texts = ['Membuat teks mengetik...', 'Contoh animasi HTML + CSS + JS', 'Mudah dan responsif!'];
let i = 0, j = 0;
function typeLoop(){
  if(i >= texts.length) { i = 0; }
  const txt = texts[i];
  typedEl.textContent = txt.slice(0, j);
  j++;
  if(j > txt.length){
    // pause then next
    setTimeout(()=>{ j = 0; i++; typeLoop(); }, 900);
  } else {
    setTimeout(typeLoop, 80);
  }
}
typeLoop();

// 5. Simple carousel logic
const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const slides = track.children;
const slideCount = slides.length;

function updateCarousel(){
  const width = slides[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

window.addEventListener('resize', updateCarousel);
next.addEventListener('click', ()=> { index = (index + 1) % slideCount; updateCarousel(); });
prev.addEventListener('click', ()=> { index = (index - 1 + slideCount) % slideCount; updateCarousel(); });

// optional: auto play
let autoplay = setInterval(()=>{ index = (index + 1) % slideCount; updateCarousel(); }, 3500);
track.addEventListener('mouseenter', ()=> clearInterval(autoplay));
track.addEventListener('mouseleave', ()=> { autoplay = setInterval(()=>{ index = (index + 1) % slideCount; updateCarousel(); }, 3500); });

// 6. Reveal on scroll (IntersectionObserver)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) {
      e.target.classList.add('is-visible');
      // Optionally unobserve to animate only once:
      io.unobserve(e.target);
    }
  });
}, {threshold:0.18});
reveals.forEach(r => io.observe(r));
