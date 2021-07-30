import http from '../utils/request'

export const getImgCategory = () => {
  return http({
    url: '/api/getimgcategory',
    method: 'get'
  })
}

export const getImages = id => {
  return http({
    url: '/api/getimages/' + id,
    method: 'get'
  })
}

export const getImageInfo = id => {
  return http({
    url: '/api/getimageInfo/' + id,
    method: 'get'
  })
}

export const getThumImages = id => {
  return http({
    url: '/api/getthumimages/' + id,
    method: 'get'
  })
}