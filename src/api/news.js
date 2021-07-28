import http from '../utils/request'

export const getNewsList = () => {
  return http({
    url: '/api/getnewslist',
    method: 'get'
  })
}

export const getNewsInfo = (id) => {
  return http({
    url: '/api/getnew/' + id,
    method: 'get'
  })
}

export const getComments = ({ id, pageIn, pageLi }) => {
  return http({
    url: `/api/getcomments/${id}?pageindex=${pageIn}&limit=${pageLi}`,
    method: 'get'
  })
}

export const postComments = ({ id, content }) => {
  return http({
    url: `/api/postcomment/${id}`,
    method: 'post',
    data: {
      content
    }
  })
}

