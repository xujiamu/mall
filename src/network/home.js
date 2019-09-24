//这里犯了没有加./的错误~~
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url : '/api/v1/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/api/v1/home/data',
    params :{
      type,
      page
    }
  })
}
