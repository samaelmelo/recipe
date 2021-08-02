// quando apertar no backtotop
// ele so pode aparecer quando o top chegar na parte ingredientes

const backToTop = document.querySelector('.back-to-top')

// quando der scroll o btn aparece 
window.addEventListener('scroll', () => {

  if(window.innerWidth >= 980){
    backToTop.style.display= 'none'
  }else if (Math.floor(window.pageYOffset) >= 800) {
    backToTop.style.display= 'flex'
  } else {
    backToTop.style.display= 'none'
  }

})


backToTop.addEventListener('click',() => {
  const title = document.querySelector(' header h1')
    title.scrollIntoView()
  })
  
  
  
  // LOGICA para animação 
  /*
   1 - selecionar elementos q devem ser animados
   2 -definir a classe que é adicionada durante a animação
   3 -criar função de animação
   3.1 --verificar a distnacia entre a barra de scrool e o top do site
   3.2 --verificar se a distancia do --anterior + offset é maior do que a distancia entre o elemento e o top da pagina
   4 -se verdadeiro add classe de animação, remover se false
   5 -ativar a função de animação toda vez que o usuario utilizar o scrool
   6 - otimizar ativação
  */

// etapa 1 
    const target = document.querySelectorAll('[data-anime]')
// etapa 2
    const animateClass = 'animate';
// etapa 3
  function animeScroll(){
// etapa 3.1              faz com que a animação apareça sempre em 3/4 da tela
    const windowTop = Math.floor(window.pageYOffset) + ((window.innerHeight * 3) / 4 )
    // console.log(windowTop) 
    target.forEach(function(element){
      // comparar as duas distancias do windowTop e o element.offSetTop
// etapa 4 
      if((windowTop) > element.offsetTop){
        element.classList.add(animateClass)
      }else{
        element.classList.remove(animateClass)
      }
    })
  }
animeScroll()
// etapa 5

if(target.length){
  window.addEventListener('scroll',animeScroll)
  
}