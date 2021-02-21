let Lights_On = false
input.onSound(DetectedSound.Loud, function () {
    Lights_On = !(Lights_On)
    if (Lights_On) {
        music.playMelody("G E G - G E G - ", 120)
        music.playMelody("A G F E D E F E ", 120)
        music.playMelody("G C - C C C - C ", 120)
        music.playMelody("D E F G - G D D ", 120)
        music.playMelody("F E D C C C C C ", 120)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
