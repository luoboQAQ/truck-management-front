import request from '@/utils/request'

const api = {
  getSigns: '/sign/getSign',
  getSigns1: '/sign/getSign1',
  updateState: '/sign/updateState',
  getUnSign: '/sign/getUnSign',
  fundApp: '/sign/fundApp'
}

export function fundApp (num, id) {
  return request({
    url: api.fundApp,
    method: 'post',
    params: {
      num,
      id
    }
  })
}

export function updateState (serial) {
  return request({
    url: api.updateState,
    method: 'post',
    data: serial
  })
}

export function getUnSign (page, size, name, date) {
  if (date !== '' && name === '') {
    return request({
      url: api.getUnSign,
      method: 'get',
      params: {
        page,
        size,
        date
      }
    })
  } else if (date === '' && name !== '') {
    return request({
      url: api.getUnSign,
      method: 'get',
      params: {
        page,
        size,
        name
      }
    })
  } else {
    return request({
      url: api.getUnSign,
      method: 'get',
      params: {
        page,
        size,
        name,
        date
      }
    })
  }
}

export function getSigns (page, size, num, date) {
  if (date !== '' && num === '') {
    return request({
      url: api.getSigns1,
      method: 'get',
      params: {
        page,
        size,
        date
      }
    })
  } else if (date === '' && num !== '') {
    return request({
      url: api.getSigns,
      method: 'get',
      params: {
        page,
        size,
        num
      }
    })
  } else {
    return request({
      url: api.getSigns,
      method: 'get',
      params: {
        page,
        size,
        num,
        date
      }
    })
  }
}

export function getSigns1 (page, size, license, date) {
  if (date !== '' && license === '') {
    return request({
      url: api.getSigns1,
      method: 'get',
      params: {
        page,
        size,
        date
      }
    })
  } else if (date === '' && license !== '') {
    return request({
      url: api.getSigns1,
      method: 'get',
      params: {
        page,
        size,
        license
      }
    })
  } else {
    return request({
      url: api.getSigns1,
      method: 'get',
      params: {
        page,
        size,
        license,
        date
      }
    })
  }
}
