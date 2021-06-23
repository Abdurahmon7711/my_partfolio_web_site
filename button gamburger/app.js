(function (){
    const burger = document.querySelector('.burger');
    const div = document.querySelector('.div');
    burger.addEventListener('click', ()=>{
        div.classList.toggle('newb');
    });
}())    