import getElement from './utils/getElement'

export default function setupDarkmode() {
  const body = getElement('body')
  const buttonDarkMode = getElement('.js-button-darkmode')

  buttonDarkMode.addEventListener('click', () => {
    body.classList.toggle('darkmode')
  })
}
