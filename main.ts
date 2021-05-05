let score1 = 0
let score2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    score1 = 0
    score1 = 0
    basic.pause(10000)
    if (score1 > score2) {
        basic.showString("Player 1 wins")
    } else if (score1 < score2) {
        basic.showString("Player 2 wins")
    } else {
        basic.showString("Tie")
    }
})
input.onPinPressed(TouchPin.P2, function () {
    score2 += 1
})
input.onPinPressed(TouchPin.P1, function () {
    score1 += 1
})
