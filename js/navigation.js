const linkObj = [
  {
    id: 1,
    name: 'NEW CARS',
    url: './new-cars.html',
  },
  {
    id: 2,
    name: 'CONTACT US',
    url: './contacts.html',
  },
]

function navigation() {

  const header = document.querySelector('.header')

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

  for (let i = 0; i < linkObj.length; i++) {
    const item = linkObj[i]

    const item1 = document.createElement('li')
    item1.className = 'menu__list-item'
    list.appendChild(item1)

    const link1 = document.createElement('a')
    link1.className = 'menu__list-link'
    link1.setAttribute('href', item.url)
    link1.innerText = item.name
    item1.appendChild(link1)
  }

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