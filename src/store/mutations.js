export default {
  addCount(state,payload){
    payload.count += 1
  },
  statepush(state,payload){
    payload.checked = true
    state.cartInfo.push(payload)
  }
}