let _1 = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (randint(0, 3141592653589798)))
})
input.onGesture(Gesture.Shake, function () {
    _1 = randint(1, 6)
    basic.showString("" + (_1))
})
