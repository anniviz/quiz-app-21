const homePage = document.querySelector('.home-page')
const bookmarksPage = document.querySelector('.bookmarks-page')
const createPage = document.querySelector('.create-page')
const profilePage = document.querySelector('.profile-page')

const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const bookmark = document.querySelector('.js-quiz-card > div')

buttonHome.addEventListener('click', () => {
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
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.remove('hidden')

  buttonHome.classList.remove('active-nav-item')
  buttonBookmarks.classList.remove('active-nav-item')
  buttonCreate.classList.remove('active-nav-item')
  buttonProfile.classList.add('active-nav-item')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})
