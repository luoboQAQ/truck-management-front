import request from '@/utils/request'

const api = {
  insertSlips: '/slips/insertSlips',
  updateSlips: '/slips/updateSlips'
}

export function insertSlips (slips) {
  return request({
    url: api.insertSlips,
    method: 'post',
    data: {
      ...slips
    }
  })
}

export function updateSlips (slips) {
  return request({
    url: api.updateSlips,
    method: 'post',
    data: {
      ...slips
    }
  })
}
