const alphabetsEl = document.querySelectorAll('img');
alphabetsEl.forEach(alphabet =>{
    alphabet.addEventListener('click',e=>{
      let key=e.target.dataset.alphabet
      const audio= document.querySelector(`audio[data-alphabet="${key}"]`);
      audio.play();
      if(!key) return;
         
    })
})
const sounds = (e) =>{
  if(e.type === 'click') key=e.target.dataset.alphabet

  if(!key) return
  

  if(!audio) return

  window.addEventListener('click', playSound)
}