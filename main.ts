let distance = 0
led.enable(false)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, 0)
    control.waitMicros(2)
    pins.analogWritePin(AnalogPin.P2, 1)
    control.waitMicros(10)
    pins.analogWritePin(AnalogPin.P2, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
    serial.writeValue("distance(cm)", distance)
    basic.pause(50)
})
