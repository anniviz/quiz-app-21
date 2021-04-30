const homePage = getElement('.home-page')
const bookmarksPage = getElement('.bookmarks-page')
const createPage = getElement('.create-page')
const profilePage = getElement('.profile-page')

const buttonHome = getElement('.button-home')
const buttonBookmarks = getElement('.button-bookmarks')
const buttonCreate = getElement('.button-create')
const buttonProfile = getElement('.button-profile')
const buttonAnswer = getElement('.js-button-answer')
const buttonDarkMode = getElement('.js-button-darkmode')

const header = getElement('[data-header]')
const bookmark = getElement('.js-quiz-card > div')
const answer = getElement('.js-quiz-card__answer')
const body = getElement('body')

buttonHome.addEventListener('click', navigateToHome)
buttonBookmarks.addEventListener('click', navigateToBookmarks)
buttonCreate.addEventListener('click', navigateToCreate)
buttonProfile.addEventListener('click', navigateToProfile)

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

buttonDarkMode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})

function getElement(selector) {
  return document.querySelector(selector)
}

function navigateToHome() {
  header.innerText = 'Quiz App'

  changePage(homePage)
  selectButton(buttonHome)
}

function navigateToBookmarks() {
  header.innerText = 'Bookmarks'

  changePage(bookmarksPage)
  selectButton(buttonBookmarks)
}

function navigateToCreate() {
  header.innerText = 'New Question'

  changePage(createPage)
  selectButton(buttonCreate)
}

function navigateToProfile() {
  header.innerText = 'Profile'

  changePage(profilePage)
  selectButton(buttonProfile)
}

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function selectButton(button) {
  deactivateAllButtons()
  button.classList.add('active-nav-item')
}

function hideAllPages() {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')
}

function deactivateAllButtons() {
  buttonHome.classList.remove('active-nav-item')
  buttonBookmarks.classList.remove('active-nav-item')
  buttonCreate.classList.remove('active-nav-item')
  buttonProfile.classList.remove('active-nav-item')
}
