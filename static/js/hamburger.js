const burger = document.querySelector('.burger');

const parent = document.querySelector('.container');

const child = parent.querySelectorAll('.item');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');

    for(let i=0; i<child.length; i++){
        if(burger.classList.contains('active')){
            child[i].style.visibility = 'visible'
            child[i].style.opacity = '1';
           
            
        }else{
            child[i].style.visibility = 'hidden';
            child[i].style.opacity = '0'


        }
        
    }
    
})
