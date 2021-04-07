import {request} from './request'

export function getDetailIid(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}
export function getCommend(params) {
  return request({
    url: '/recommend'
  })
}

export class Goods{
  constructor(columns,itemInfo,services){
    this.columns = columns
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.services = services
    this.realprice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
  }
}