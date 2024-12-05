// Captura dos elementos principais
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let SliderDom = document.querySelector('.carousel .list');
let SliderItemsDom = SliderDom.querySelectorAll('.item');
let currentIndex = 0; // índice atual do slide

// Função para atualizar o estado dos slides
function updateSlides(index) {
    SliderItemsDom.forEach((item, i) => {
        item.classList.remove('active', 'prev', 'next');
        if (i === index) {
            item.classList.add('active'); // Slide visível
        } else if (i === (index - 1 + SliderItemsDom.length) % SliderItemsDom.length) {
            item.classList.add('prev'); // Slide anterior
        } else if (i === (index + 1) % SliderItemsDom.length) {
            item.classList.add('next'); // Próximo slide
        }
    });
}

// Inicializar o estado inicial
updateSlides(currentIndex);

// Próximo slide
nextDom.onclick = function () {
    currentIndex = (currentIndex + 1) % SliderItemsDom.length;
    updateSlides(currentIndex);
};

// Slide anterior
prevDom.onclick = function () {
    currentIndex = (currentIndex - 1 + SliderItemsDom.length) % SliderItemsDom.length;
    updateSlides(currentIndex);
};

// Automação para passar automaticamente
let timeAutoNext = 7000;
let autoSlide = setInterval(() => {
    nextDom.click();
}, timeAutoNext);

// Pausar ao interagir
[nextDom, prevDom].forEach((btn) =>
    btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            nextDom.click();
        }, timeAutoNext);
    })
);


