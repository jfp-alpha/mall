export default {
  addtocartt(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = null
      for (const item of context.state.cartInfo) {
        if(item.iid == payload.iid){
          oldProduct = item
        }
      }

      if (oldProduct) {
        context.commit('addCount',oldProduct)
        resolve('当前商品数量+1')
      }else {
        payload.count = 1
        context.commit('statepush',payload)
        resolve('添加购物车成功')
      }
    })
  }
}