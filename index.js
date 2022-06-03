// Your code here
const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#000000";
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";
document.addEventListener("keydown", (e) => {
  console.log(event)
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp()
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown()
  }
})

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "")
  const right = parseInt(rightNumbers, 10)

  if (right < 360) {
    dodger.style.left = `${right + 10}px`
  }

}

function moveDodgerUp() {
  const upNumbers = dodger.style.bottom.replace("px", "")
  const up = parseInt(upNumbers, 10)

  if (up < 375) {
    dodger.style.bottom = `${up + 10}px`
  }

}

function moveDodgerDown() {
  const downNumbers = dodger.style.bottom.replace("px", "")
  const down = parseInt(downNumbers, 10)

  if (down > 0) {
    dodger.style.bottom = `${down - 10}px`
  }

}