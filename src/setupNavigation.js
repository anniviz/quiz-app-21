import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')
  const header = getElement('[data-header]')

  buttons.forEach(button => {
    const buttonName = button.dataset.nav
    const headerText = button.dataset.headerText

    button.addEventListener('click', () => {
      header.innerText = headerText
      changePage(buttonName)
      updateNavigation(buttonName)
    })
  })

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }

  function updateNavigation(buttonName) {
    buttons.forEach(button => {
      button.classList.toggle(
        'active-nav-item',
        buttonName === button.dataset.nav
      )
    })
  }
}
