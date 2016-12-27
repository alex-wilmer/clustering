import _ from 'lodash'
import { observable, action } from 'mobx'

export default observable({
  nodeCount: 100,
  setNodeCount: action(function (count) {
    this.nodeCount = count
  }),
  get data() {
    return _.range(this.nodeCount).map(n => ({
      x: n, y: n + 2,
    }))
  },
})
