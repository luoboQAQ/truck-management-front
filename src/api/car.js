import request from '@/utils/request'

const api = {
  addFeedBack: '/car/addFeedBack'
}

export function addFeedBack (cId, isGood) {
  return request({
    url: api.addFeedBack,
    method: 'post',
    params: {
      cId,
      isGood
    }
  })
}
