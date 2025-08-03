function showMoreCars() {
  const showMoreBtn = document.getElementById('showMoreCars')

  showMoreBtn.addEventListener('click', () => {
    for(let i = 0; i < 8; i++) {
      createCard()
    }
  })
}

function createCard() {

  const tabs = document.querySelector('.tabs__content-item')

  const card = document.createElement('div')
  card.className = 'card'
  tabs.appendChild(card)

  const carImg = document.createElement('img')
  carImg.className = 'card__img'
  carImg.setAttribute('src', './img/card/card-1.jpg')
  card.appendChild(carImg)

  const cardContent = document.createElement('div')
  cardContent.className = 'card__contetn'
  card.appendChild(cardContent)

  const cardTitle = document.createElement('h4')
  cardTitle.className = 'card__title'
  cardTitle.innerText = 'Toyota Crown 2023'
  cardContent.appendChild(cardTitle)

  const cardText = document.createElement('p')
  cardText.className = 'card__text'
  cardText.innerText = 'starting from $ 39900'
  cardContent.appendChild(cardText)

  const cardPrice = document.createElement('p')
  cardPrice.className = 'card__price'
  cardPrice.innerText = '$ 650/mo'
  cardContent.appendChild(cardPrice)

  const cardLink = document.createElement('a')
  cardLink.setAttribute('href', './auto.html')
  cardLink.className = 'card__link'
  cardLink.innerText = 'see details'
  card.appendChild(cardLink)
}

showMoreCars()