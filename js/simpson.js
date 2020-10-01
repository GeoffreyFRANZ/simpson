(function () {
  let menuOpened = false
  let button = document.querySelector('#menu')
  button.addEventListener('click', function(e) {
      e.stopPropagation()
      e.preventDefault()
      document.querySelector('nav').classList.add('open')
     menuOpened = true
  })
  
  document.body.addEventListener('click', function(){
      if(menuOpened){
          document.querySelector('nav').classList.remove('open')
      }
  })
  
  })()