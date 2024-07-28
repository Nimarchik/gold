let infBtn = document.querySelector('.full-descript__text-btn')
let descriptText = document.querySelector('.full-descript__text-description')

infBtn.addEventListener('click', ()=>{
  descriptText.classList.toggle('full-descript__text-description--show')
})

