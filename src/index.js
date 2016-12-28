// import { autorun } from 'mobx'
import * as theme from './theme'
import state from './state'
import { canvas, ctx } from './canvas'

let resizeCanvas = ({ canvas }) => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resizeCanvas({ canvas })

window.addEventListener(`resize`, () => resizeCanvas({ canvas }))

let drawAxis = ({ ctx, ox, oy, theme }) => {
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

let drawCircle = ({ ctx, node, t }) => {
  ctx.beginPath()
  ctx.arc(node.x, node.y, 50 + (Math.sin(t / 100) * 20), 0, Math.PI * 2)
  // ctx.fillStyle = `hsl(${t + node.x}, 50%, 70%)`
  var x = Math.random() * 10
  ctx.fillStyle = ~~x % 7 === 0
    ? `white`
    : ~~x % 14 === 0
      ? `rgb(78, 190, 232)`
      : ~~x % 21 === 0
        ? `green`
        : `purple`
  ctx.fill()

  ctx.beginPath()
  ctx.arc(node.y, node.x, 50 + (Math.sin(t / 100) * 20), 0, Math.PI * 2)
  // ctx.fillStyle = `hsl(${t + node.x}, 50%, 70%)`
  var x = Math.random() * 10
  ctx.fillStyle = ~~x % 6 === 0
    ? `red`
    : ~~x % 17 === 0
      ? `rgb(232, 212, 78)`
      : ~~x % 30 === 0
        ? `greenrgb(227, 27, 27)`
        : `purplergb(21, 30, 96)`
  ctx.fill()
}

let drawNodes = ({ state, ctx, t }) => {
  state.nodes.forEach(node => {
    drawCircle({ ctx, node, t })
  })
}

let draw = ({ t, canvas, ctx, state, theme }) => {
  canvas.width = canvas.width

  state.setNodeCount(~~(Math.random() * 1000))

  let ox = canvas.width / 2
  let oy = canvas.height / 2

  drawAxis({ ctx, ox, oy, theme })
  drawNodes({ state, ctx, t })

  requestAnimationFrame(t => draw({ t, canvas, ctx, state, theme }))
}

draw({ t: 0, canvas, ctx, state, theme })
