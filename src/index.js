import { autorun } from 'mobx'
import * as theme from './theme'
import state from './state'

let canvas = document.createElement(`canvas`)
let ctx = canvas.getContext(`2d`)

document.body.appendChild(canvas)

let resizeCanvas = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resizeCanvas()

window.addEventListener(`resize`, resizeCanvas)

let drawAxis = ({ ox, oy }) => {
  ctx.beginPath()
  ctx.moveTo(0, oy)
  ctx.lineTo(ox * 2, oy)
  ctx.strokeStyle = theme.pale
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(ox, 0)
  ctx.lineTo(ox, oy * 2)
  ctx.strokeStyle = theme.pale
  ctx.stroke()
}

let draw = () => {
  canvas.width = canvas.width

  let ox = canvas.width / 2
  let oy = canvas.height / 2

  drawAxis({ ox, oy })

  requestAnimationFrame(draw)
}

draw()

console.log(state.nodeCount)
console.log(state.data)
console.log(state.nodeCount = 10)
console.log(state.data)
