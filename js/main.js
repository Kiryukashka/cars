
function modal() {
  const dialog = document.getElementById('dialog')
  const openModal = document.querySelectorAll('.open-modal')
  const closeModal = document.querySelector('.close-modal')

  function openModalAndBlockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-block')
  }

  function returnScroll() {
    document.body.classList.remove('scroll-block')
  }

  function close() {
    dialog.close()
    returnScroll()
  }

  openModal.forEach(button => {
    button.addEventListener('click', openModalAndBlockScroll)
    closeModal.addEventListener('click', () => {
      close()
    })
  })

  function closeOnOverlayClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isOverlayClick = target === dialog
    if (isOverlayClick) {
      close()
    }
  }

  dialog.addEventListener('click', closeOnOverlayClick)
  dialog.addEventListener('close', () => {
    returnScroll()
  })
}

function phone() {
  const box = document.getElementById('phone')
  const footer = document.querySelector('.footer')

  window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if(footerTop < windowHeight) {
      const overlay = windowHeight - footerTop
      box.style.bottom = `${5 + overlay}px`
    } else {
      box.style.bottom = '5px'
    }
  })
}

function copyCurrentUrl() {
  const currentUrl = window.location.href;

  navigator.clipboard.writeText(currentUrl)
}


modal()

phone()