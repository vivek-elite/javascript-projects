setInterval(changeTime, 1000)

const hourHand = document.getElementById("hourHand")
const minuteHand = document.getElementById("minHand")
const secondHand = document.getElementById("secHand")

function changeTime() {
  const dateHold = new Date()
  const splitSecs = dateHold.getSeconds() / 60
  
  const splitMins = (splitSecs + dateHold.getMinutes()) / 60
  const splitHours = (splitMins + dateHold.getHours()) / 12

  handChanger(secondHand, splitSecs)
  handChanger(minuteHand, splitMins)
  handChanger(hourHand, splitHours)
}

function handChanger(element, splitter) {
  element.style.setProperty('--rotation', splitter * 360)
}

changeTime()