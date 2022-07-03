import request from '@/utils/request'

const api = {
  insertSlips: '/slips/insertSlips'
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
