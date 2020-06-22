const secondsHand = document.getElementById("secondsHand")
const minuteHand = document.getElementById("minuteHand")
const hourHand = document.getElementById("hourHand")

function setTime() {
  const time = new Date();

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()

  const secondsDegrees = (seconds / 60 * 360) + 90
  const minutesDegrees = ((minutes / 60 * 360) + (seconds * 0.1)) + 90
  const hoursDegrees = ((hours / 12 * 360) + (minutes * 0.1)) + 90


  if (minutes == 0) {
    minuteHand.style.transition = "none"
    hourHand.style.transition = "none"
  } else {
    minuteHand.style.transition = "all 0.05s cubic-bezier(1,2.5,.85,1.2)"
    hourHand.style.transition = "all 0.05s cubic-bezier(1,2.5,.85,1.2)"
  }
  if (seconds == 0) {
    secondsHand.style.transition = "none"
  } else {
    secondsHand.style.transition = "all 0.05s cubic-bezier(1,2.5,.85,1.2)"
  }

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}
setInterval(setTime, 1000)