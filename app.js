let MainBtn = document.getElementById('btn')
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close-btn')
let back = document.getElementById('back')

let addHidden = () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}



MainBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})


closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})


back.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown',(e) => {
if(e.key == 'Escape'){
    addHidden()
}
})

