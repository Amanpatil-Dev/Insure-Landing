console.log('connected')

const Responsive=document.querySelector('.responsive-nav')

Responsive.addEventListener('click',(e)=>{
    const Link=e.target.closest('.responsive-nav')
    const NvBar=document.querySelector('.overlay')
    if(NvBar.classList.contains('hidden')){
        NvBar.classList.remove('hidden')
        NvBar.classList.add('active-mobile')
    }else{
        NvBar.classList.add('hidden')

        NvBar.classList.remove('active-mobile')
    }
  

})