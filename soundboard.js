

  var buttonElement1 = document.getElementById('button-1')
  var buttonElement2 = document.getElementById('button-2')
  var buttonElement3 = document.getElementById('button-3')

  var kick = new Audio('kick.wav');

var snare = new Audio('snare.wav');

var hihat = new Audio('hihat.wav');

  //Button 1
  buttonElement1.addEventListener('click', function () {
    if (kick.currentTime != 0){
      kick.currentTime = 0
    }
    kick.play()
  })

  //Button 2
  buttonElement2.addEventListener('click', function () {
    if (snare.currentTime != 0){
      snare.currentTime = 0
    }
    snare.play()
  })

  //Button 3
  buttonElement3.addEventListener('click', function () {
    if (hihat.currentTime != 0){
      hihat.currentTime = 0
    }
    hihat.play()
  })
  