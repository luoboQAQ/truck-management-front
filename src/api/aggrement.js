import request from '@/utils/request'

const api = {
  selectByaState: '/aggrement/selectByaState'
}

export function selectByaState (page, size, aState) {
  return request({
    url: api.selectByaState,
    method: 'get',
    params: {
      page,
      size,
      aState
    }
  })
}
