radio.onReceivedNumber(function (receivedNumber) {
    Pitch = receivedNumber
    if (Power == 1) {
        music.ringTone(receivedNumber)
    } else if (Power == 2) {
        music.playTone(receivedNumber, music.beat(BeatFraction.Whole))
    } else if (Power == 3) {
        music.playTone(receivedNumber, music.beat(BeatFraction.Half))
    } else if (Power == 4) {
        music.playTone(receivedNumber, music.beat(BeatFraction.Quarter))
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (Power == 0) {
        Power = 1
    } else if (Power == 1) {
        Power = 2
    } else if (Power == 2) {
        Power = 3
    } else if (Power == 3) {
        Power = 4
    } else if (Power == 4) {
        Power = 0
    }
})
let Pitch = 0
let Power = 0
radio.setGroup(1984)
Power = 0
basic.forever(function () {
    if (Pitch >= 440 && Pitch < 494) {
        basic.showString("A")
    } else if (Pitch >= 494 && Pitch < 523) {
        basic.showString("B")
    } else if (Pitch >= 523 && Pitch < 587) {
        basic.showString("C")
    } else if (Pitch >= 587 && Pitch < 659) {
        basic.showString("D")
    } else if (Pitch >= 659 && Pitch < 698) {
        basic.showString("E")
    } else if (Pitch >= 698 && Pitch < 784) {
        basic.showString("F")
    } else if (Pitch >= 784 && Pitch < 494) {
        basic.showString("G")
    } else if (Pitch >= 220 && Pitch < 247) {
        basic.showString("A")
    } else if (Pitch >= 247 && Pitch < 262) {
        basic.showString("B")
    } else if (Pitch >= 262 && Pitch < 294) {
        basic.showString("C")
    } else if (Pitch >= 294 && Pitch < 330) {
        basic.showString("D")
    } else if (Pitch >= 330 && Pitch < 349) {
        basic.showString("E")
    } else if (Pitch >= 349 && Pitch < 392) {
        basic.showString("F")
    } else if (Pitch >= 392 && Pitch < 440) {
        basic.showString("G")
    } else {
        basic.showLeds(`
            . . # # .
            . . # . #
            . . # # .
            # # # . #
            # # . . .
            `)
    }
})
