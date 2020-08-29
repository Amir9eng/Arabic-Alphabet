const alphabetsEl = document.querySelectorAll('img')

function sounds (e) {
  let key
  if(e.type === 'click') key=e.target.dataset.alphabet

  if(!key) return
  
  const audio= document.querySelector(`audio[data-alphabet="${key}"]`)

  if(!audio) return
  window.addEventListener('click', playSound)
}