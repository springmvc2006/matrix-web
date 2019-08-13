import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys-dict-type/pagelist',
    method: 'get',
    params
  })
}

export function save(params) {
  return request({
    url: '/sys-dict-type',
    method: 'post',
    params
  })
}


export function update(params) {
  return request({
    url: '/sys-dict-type',
    method: 'put',
    params
  })
}

export function remove(id) {
  return request({
    url: `/sys-dict-type/${id}`,
    method: 'delete',
    params: {
      id:id
    }
  })
}
