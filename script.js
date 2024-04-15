var milliseconds = 0
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

var countdown = setInterval(function() {
    milliseconds += 1
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
        }
    }
},1)

document.getElementById('timer').onclick = function() {
    if (watergate == true) {
        watergate = false
    } else {
        seconds = 0
        milliseconds = 0
        watergate = true
    }
    
}