var milliseconds = 0
var total_milliseconds = 0
var highscore = 2000
var seconds = 0
var watergate = false

document.addEventListener('keydown', (keyboardEvent) => {
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault()
        document.getElementById('timer').click()
    }
})

document.getElementById('controlsBTN').onclick = function() {
    document.getElementById('controls').showModal()
}

document.getElementById('howtoplayBTN').onclick = function() {
    document.getElementById('howtoplay').showModal()
}

document.getElementById('gamesBTN').onclick = function() {
    if (document.getElementById('gamesTableTH').style.display === "table-row") {
        document.getElementById('gamesTableTH').style.display = "none"
    } else {
        document.getElementById('gamesTableTH').style.display = "table-row"
    }
}

function highscoreCalc() {
    var score = NaN

    if (total_milliseconds <= 1000) {
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
            document.getElementById('timer').innerText = "0:02:000 (+1000)"
            highscoreCalc()
        }
    }
},1)

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
