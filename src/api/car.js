import request from '@/utils/request'

const api = {
  addFeedBack: '/car/addFeedBack',
  selectAll: '/car/selectAll',
  insertCar: '/car/insertCar'
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

export function selectAll () {
  return request({
    url: api.selectAll,
    method: 'get'
  })
}

export function insertCar (car) {
  return request({
    url: api.insertCar,
    method: 'post',
    data: {
      ...car
    }
  })
}
