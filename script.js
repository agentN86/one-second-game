var milliseconds = 0
var total_milliseconds = 0
var highscore = 2000
var seconds = 0
var watergate = false

// This allows the timer to be started and stopped

document.addEventListener('keydown', (keyboardEvent) => {
  if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
    keyboardEvent.preventDefault()
    document.getElementById('timer').click()
  }
})

// Just opens the control dialog

document.getElementById('controlsBTN').onclick = function() {
  document.getElementById('controls').showModal()
}

document.getElementById('howtoplayBTN').onclick = function() {
  document.getElementById('howtoplay').showModal()
}

// Games table

document.getElementById('gamesBTN').onclick = function() {
  var elements = document.getElementsByClassName('gamesTableTH')
  if (elements[0].style.display === "table-row") {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none"
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "table-row"
    }
  }
}

function highscoreCalc() {
  // Using very simple formulas, we can calculate the highscore!
  var score = NaN

  if (total_milliseconds == 1000) {
    document.getElementById('onesecondwin').showModal()
    document.getElementById('tadaSFX').play()

    document.getElementById('highscore').style.display = "none"
    document.getElementById('onesecondH').style.display = "table-row"
    return
  }


  if (total_milliseconds < 1000) {
    score = 1000 + -total_milliseconds
    document.getElementById('timer').innerText = document.getElementById('timer').innerText + " (-" + score + ")"

    if (score < highscore) {
      highscore = score
      document.getElementById('highscore').innerText = "-" + highscore
      document.getElementById('highscore').style.color = "red"

      document.getElementById('newhighscore').showModal()
      document.getElementById('winSFX').play()
    }
  } else {

    score = total_milliseconds - 1000
    document.getElementById('timer').innerText = document.getElementById('timer').innerText + " (+" + score + ")"

    if (score < highscore) {
      highscore = score
      document.getElementById('highscore').innerText = "+" + highscore
      document.getElementById('highscore').style.color = "green"

      document.getElementById('newhighscore').showModal()
      document.getElementById('winSFX').play()
    }

  }
}

var countdown = setInterval(function() {
  milliseconds += 1
  total_milliseconds += 1
  if (milliseconds >= 1000) {
    seconds += 1
    milliseconds = 0
  }
  countdown = "0:0" + seconds + ":" + milliseconds

  if (watergate == true) {
    document.getElementById('timer').innerText = countdown

    if (seconds >= 2) {
      watergate = false
      document.getElementById('timer').innerText = "0:02:000"
      highscoreCalc()
    }
  }
}, 1)

document.getElementById('timer').onclick = function() {
  if (watergate == true) {
    watergate = false
    highscoreCalc()
  } else {
    seconds = 0
    milliseconds = 0
    total_milliseconds = 0
    watergate = true
  }

}