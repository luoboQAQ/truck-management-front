import request from '@/utils/request'

const api = {
  getAllOrder: '/order/getAllOrder'
}

export function getAllOrder (page, size) {
  return request({
    url: api.getAllOrder,
    method: 'get',
    params: {
      page,
      size
    }
  })
}
