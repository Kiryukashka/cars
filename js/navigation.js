function navigation() {
  console.log('Функція navigation() викликана');

  const mainContainer = document.querySelector('.wrapper')
  console.log('mainContainer:', mainContainer);

  const header = document.createElement('header')
  header.className = 'header'

  // if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index') {
  //   header.classList.add('header-main');
  // }

  if (window.location.href === 'https://kiryukashka.github.io/cars/index.html') {
    header.classList.add('header-main');
  }

  mainContainer.prepend(header)

  const container = document.createElement('div')
  container.className = 'container'
  header.appendChild(container)

  const inner = document.createElement('div')
  inner.className = 'header__inner'
  container.appendChild(inner)

  const logo = document.createElement('a')
  logo.setAttribute('href', './index.html')
  logo.className = 'logo'
  inner.appendChild(logo)

  const logoImg = document.createElement('img')
  logoImg.setAttribute('src', './img/logo/logo.svg')
  logoImg.className = 'logo__img'
  logo.appendChild(logoImg)

  const nav = document.createElement('nav')
  nav.className = 'menu'
  inner.appendChild(nav)

  const list = document.createElement('ul')
  list.className = 'menu__list'
  nav.appendChild(list)

  const item1 = document.createElement('li')
  item1.className = 'menu__list-item'
  list.appendChild(item1)

  const link1 = document.createElement('a')
  link1.className = 'menu__list-link'
  link1.setAttribute('href', './new-cars.html')
  link1.innerText = 'NEW CARS'
  item1.appendChild(link1)

  const item2 = document.createElement('li')
  item2.className = 'menu__list-item'
  list.appendChild(item2)

  const link2 = document.createElement('a')
  link2.className = 'menu__list-link'
  link2.setAttribute('href', './contacts.html')
  link2.innerText = 'CONTACT US'
  item2.appendChild(link2)

  const burger = document.createElement('div')
  burger.className = 'burger'
  inner.appendChild(burger)

  const burgerSpan = document.createElement('span')
  burger.appendChild(burgerSpan)
}

function buttonBurger() {
  const burgerBtn = document.querySelector('.burger')

  function openButtonBurger() {
    this.classList.toggle('burger__active')
    document.querySelector('.menu').classList.toggle('open')
  }

  burgerBtn.addEventListener('click', openButtonBurger)
}

navigation()

buttonBurger()