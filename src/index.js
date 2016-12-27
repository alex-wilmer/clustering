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

let drawCircle = ({ ctx, node }) => {
  ctx.beginPath()
  ctx.arc(node.x, node.y, 10, 0, Math.PI * 2)
  ctx.stroke()
}

let drawNodes = ({ state, ctx }) => {
  state.nodes.forEach(node => {
    drawCircle({ ctx, node })
  })
}

let draw = ({ t, canvas, ctx, state, theme }) => {

  state.setNodeCount(t % 1000)

  canvas.width = canvas.width

  let ox = canvas.width / 2
  let oy = canvas.height / 2

  drawAxis({ ctx, ox, oy, theme })
  drawNodes({ state, ctx })
  requestAnimationFrame(t => draw({ t, canvas, ctx, state, theme }))
}

draw({ t: 0, canvas, ctx, state, theme })
