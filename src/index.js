const homePage = document.querySelector('.home-page')
const bookmarksPage = document.querySelector('.bookmarks-page')
const createPage = document.querySelector('.create-page')
const profilePage = document.querySelector('.profile-page')

const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')
const buttonAnswer = document.querySelector('.js-button-answer')
const buttonDarkMode = document.querySelector('.js-button-darkmode')

const header = document.querySelector('[data-header]')
const bookmark = document.querySelector('.js-quiz-card > div')
const answer = document.querySelector('.js-quiz-card__answer')
const body = document.querySelector('body')

buttonHome.addEventListener('click', () => {
  header.innerText = 'Quiz App'

  homePage.classList.remove('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  buttonHome.classList.add('active-nav-item')
  buttonBookmarks.classList.remove('active-nav-item')
  buttonCreate.classList.remove('active-nav-item')
  buttonProfile.classList.remove('active-nav-item')
})

buttonBookmarks.addEventListener('click', () => {
  header.innerText = 'Bookmarks'

  homePage.classList.add('hidden')
  bookmarksPage.classList.remove('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  buttonHome.classList.remove('active-nav-item')
  buttonBookmarks.classList.add('active-nav-item')
  buttonCreate.classList.remove('active-nav-item')
  buttonProfile.classList.remove('active-nav-item')
})

buttonCreate.addEventListener('click', () => {
  header.innerText = 'New Question'

  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.remove('hidden')
  profilePage.classList.add('hidden')

  buttonHome.classList.remove('active-nav-item')
  buttonBookmarks.classList.remove('active-nav-item')
  buttonCreate.classList.add('active-nav-item')
  buttonProfile.classList.remove('active-nav-item')
})

buttonProfile.addEventListener('click', () => {
  header.innerText = 'Profile'

  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.remove('hidden')

  buttonHome.classList.remove('active-nav-item')
  buttonBookmarks.classList.remove('active-nav-item')
  buttonCreate.classList.remove('active-nav-item')
  buttonProfile.classList.add('active-nav-item')
})

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

buttonDarkMode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})
