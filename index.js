const mainWrapper = document.querySelector('.main-wrapper')
const graciasWrapper = document.querySelector('.gracias-wrapper')
const submitButton = document.getElementById('sumit-rating')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn')

submitButton.addEventListener('click',() =>{
    mainWrapper.style.display='none'
    graciasWrapper.classList.remove('ocultar')
})
rates.forEach((rate)=>{
rate.addEventListener('click',()=>{
    rating.innerHTML = rate.innerHTML
})
})
