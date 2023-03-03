const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const openLuckyCookie = document.querySelector('#btnTry')
const openedLuckyCookie = document.querySelector('#btnReset')

openLuckyCookie.addEventListener('click', function () {
  event.preventDefault()
  openFortuneCookie()
})
openedLuckyCookie.addEventListener('click', function () {
  openedFortuneCookie()
})

function openedFortuneCookie() {
  screen2.classList.add('hide')
  screen1.classList.remove('hide')
}

function openFortuneCookie() {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}
