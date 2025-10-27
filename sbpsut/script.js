const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('section-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.section');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const logoImg = document.querySelector(".logo img");

let currentTheme = localStorage.getItem('theme');


if (currentTheme) {
  body.classList.add(currentTheme);
  updateLogo(); 
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', 'light-mode');
  }

  updateLogo();
});

function updateLogo() {
  if (body.classList.contains('dark-mode')) {
    logoImg.setAttribute("src", "./img/logo-white.png");
  } else {
    logoImg.setAttribute("src", "./img/logo-black.svg");
  }
}


// $(document).ready(function() {
//   $("a[href^='#']").on('click', function(event) {
//       event.preventDefault();
//       var targetId = $(this).attr('href');
//       var targetElement = $(targetId);
//       var headerHeight = $('header').outerHeight(); 

//       $('html, body').animate({
//           scrollTop: targetElement.offset().top - headerHeight 
//       }, 2000);
//   });
// });

  const cardContainers = document.querySelectorAll('.card-container');

        cardContainers.forEach(container => {
            const openButton = container.querySelector('.open-button');
            const dialog = container.querySelector('dialog');
            const closeButton = container.querySelector('.close-button');

            openButton.addEventListener('click', () => {
                dialog.showModal();
            });

            closeButton.addEventListener('click', () => {
                dialog.close();
            });
            dialog.addEventListener('click',(event) =>{
                if (event.target === dialog){
                    dialog.close();
                }
            })
        });

const tableBody = document.querySelector('.table-hover');
  const expandButton = document.querySelector('.expand-btn');
  const collapseButton = document.querySelector('.collapse-btn');
  const hiddenRows = document.querySelectorAll('.hidden-row');

  expandButton.addEventListener('click', () => {
    hiddenRows.forEach(row => {
      row.style.display = 'table-row';
      row.style.animation = 'fade-in 0.5s ease';
    });
    expandButton.style.display = 'none';
    collapseButton.style.display = 'block';
  });

  collapseButton.addEventListener('click', () => {
    hiddenRows.forEach(row => {
      row.style.animation = 'fade-out 0.5s ease';
      setTimeout(() => {
        row.style.display = 'none';
        row.style.animation = ''; 
      }, 500); 
    });
    expandButton.style.display = 'block';
    collapseButton.style.display = 'none';
  });

ymaps.ready(init);
function init() {
  // Создание карты.
  var map = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.903121, 30.490242],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark(
    [59.903121, 30.490242],
    {
      balloonContent: `
				<div class="balloon">
					<div class="balloon__address">проспект Большевиков, 22к1</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+ 7 (812) 326-31-63</a>
					</div>
				</div>
			`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/location-pin.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип

  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}


const menuLinks = document.querySelectorAll('.menu__list-link'); 

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight; 

      const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight; 

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
});
