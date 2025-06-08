const sliderCardsData = [
  {
    nombre: "Pack - Emprendedor",
    subtitulo: "Pack oportuno para los ",
    img: "./assets/img/pack-s.jpg",
    precio: "$200.000 ARS",
    precioNota: "Precio Final",
    items: [
      "1 Página",
      "3 Secciones",
      "10 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  },
  {
    nombre: "Pack - Indecisos",
    subtitulo: "Este pack ideal para los indecisos",
    img: "./assets/img/pack-m.jpg",
    precio: "$300.0000 ARS",
    precioNota: "Precio Final",
    items: [
      "3 Páginas",
      "9 Secciones",
      "25 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  },
  {
    nombre: "Pack - Empresa",
    subtitulo: "Este pack perfecto para tu negocio",
    img: "./assets/img/pack-g.jpg",
    precio: "$400.000 ARS",
    precioNota: "Precio Final",
    items: [
      "5 Páginas",
      "15 Secciones",
      "50 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  }
];

// Renderiza las cartas en el swiper-wrapper
function renderSlides() {
  const wrapper = document.querySelector('.swiper-wrapper');
  wrapper.innerHTML = sliderCardsData.map((card, idx) => `
    <div class="swiper-slide">
      <div class="card">
        <img src="${card.img}" alt="${card.nombre}" class="card__img" />
        <div class="card__header card__header--${idx + 1}">
            <h3 class="card__title">${card.nombre}</h3>
            <p class="card__sub">${card.subtitulo}</p>
        </div>
        <ul class="card__items">
          ${card.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="card__price card__price-${idx + 1}">
          <span>${card.precio}</span>
          <small>${card.precioNota}</small>
        </div>
      </div>
    </div>
  `).join('')
}

renderSlides();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
    centerInsufficientSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  touchEventsTarget: 'container',
  breakpoints: {
    501: {
      slidesPerView: 'auto',
      spaceBetween: 25,
      centeredSlides: false,
      centerInsufficientSlides: true,
    }
  }
});