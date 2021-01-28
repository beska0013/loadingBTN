
const dropMenu=document.querySelector('.dropmenu')
const Btn=document.getElementById('btn')
const menuBtn=document.getElementById('menuclick')
const loadingInactive=document.querySelector('.loading')


function animation(){
    loadingInactive.classList.toggle('loadinganimation')
    Btn.classList.toggle('pushbtnactive')
    dropMenu.classList.toggle('dropmenuactive')
}
Btn.addEventListener('click',animation)



