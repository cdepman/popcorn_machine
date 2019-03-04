GPIO = require('onoff').Gpio

const onOffPinNumber = 4
const pinOn = 1
const pinOff = 0

const onOffControl = new GPIO(onOffPinNumber, 'out')

const turnOn = function () {
  console.log('turning on')
  onOffControl.writeSync(pinOn)
}

const turnOff = function () {
  console.log('turning off')
  onOffControl.writeSync(pinOff)
}

const demo = function () {
  turnOn()
  setTimeout(() => {
    turnOff()
  }, 2000);
}
