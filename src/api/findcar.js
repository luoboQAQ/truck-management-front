import request from '@/utils/request'

const api = {
  insertOwner: '/owner/insertOwner',
  insertgoods: '/goods/insertgoods',
  insertaggrement: '/aggrement/insertaggrement',
  selectaggrement: '/aggrement/selectaggrement',
  selectByaState0: '/aggrement/selectByaState0'
}

export function insertOwner (name) {
  return request({
    url: api.insertOwner,
    method: 'get',
    params: {
      name
    }
  })
}
export function insertgoods (goodsname, goodsnum, goodsunit, oname) {
  return request({
    url: api.insertgoods,
    method: 'post',
    params: {
      gname: goodsname,
      gnum: goodsnum,
      gunit: goodsunit,
      oname
    }
  })
}
export function insertaggrement (username, fieldValue, fieldValue1, date, goodsnum, reccom) {
  return request({
    url: api.insertaggrement,
    method: 'post',
    params: {
      oname: username,
      astart: fieldValue,
      aend: fieldValue1,
      transdate: date,
      aremnum: goodsnum,
      areccom: reccom
    }
  })
}

export function selectByaState0 (page, size) {
  return request({
    url: api.selectByaState0,
    method: 'get',
    params: {
      page,
      size
    }
  })
}
