const keys = document.querySelectorAll(`.key`)

function removeTransition(e) {
  this.classList.remove('playing')
}

function playSound(e) {
  const audio = document.querySelector(`.key[data-key="${e.keyCode}"] > audio`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)