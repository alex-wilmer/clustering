import _ from 'lodash'
import { observable, action } from 'mobx'

export default observable({
  nodeCount: 2000,
  setNodeCount: action(function (count) {
    this.nodeCount = count
  }),
  get nodes() {
    return _.range(this.nodeCount).map(n => ({
      x: n,
      y: n + 2,
      color: `hsl(${~~(Math.random() * 360)}, 50%, 70%)`,
    }))
  },
})
