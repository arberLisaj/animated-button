const mainBtn = document.querySelector('.button-5')
const buttonOne = document.querySelector('.button-1')
const buttonTwo = document.querySelector('.button-2')
const buttonThree = document.querySelector('.button-3')
const buttonFour = document.querySelector('.button-4')

mainBtn.addEventListener("click", () => {
    buttonOne.classList.toggle('open-1')
    buttonTwo.classList.toggle('open-2')
    buttonThree.classList.toggle('open-3')
    buttonFour.classList.toggle('open-4')
})