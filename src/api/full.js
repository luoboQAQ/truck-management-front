import request from '@/utils/request'

const api = {
  selectAll: '/full/selectAll',
  selectBySid: '/full/selectBySid'
}

export function selectAll () {
  return request({
    url: api.selectAll,
    method: 'get'
  })
}

export function selectBySid (sId) {
  return request({
    url: api.selectBySid,
    method: 'get',
    params: {
      sId
    }
  })
}
