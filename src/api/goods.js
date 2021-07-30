import http from '../utils/request'

export const getGoods = ({ pageIndex, pageSize }) => {
  return http({
    url: `/api/getgoods?pageindex=${pageIndex}&limit=${pageSize}`,
    method: 'get'
  })
}

export const getInfo = id => {
  return http({
    url: '/api/goods/getinfo/' + id,
    method: 'get'
  })
}

export const getDesc = id => {
  return http({
    url: '/api/goods/getdesc/' + id,
    method: 'get'
  })
}

export const getShopCarlist = ids => {
  return http({
    url: '/api/goods/getshopcarlist/' + ids,
    method: 'get'
  })
}