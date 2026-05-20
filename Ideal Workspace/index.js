const hamburgerMenu = document.querySelector('.hamburger-menu')

const navi = document.getElementById('hamburger-navigation')

hamburgerMenu.addEventListener('click', function () {
  navi.classList.toggle('active')

  hamburgerMenu.classList.toggle('active')
})
// 問題1. セクションをクリックした時にメニューを閉じる処理をJavaScriptで書いてください
const hamburgerMenuSections = document.querySelectorAll(
  '.hamburger-menu-section'
)

hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active')
    navi.classList.remove('active')
  })
})