import http from '../utils/request'

export const getLunbo = () => {
  return http({
    url: '/api/getlunbo',
    method: 'get'
  })
}

export const getGrids = () => {
  return http({
    url: '/api/grids',
    method: 'get'
  })
}