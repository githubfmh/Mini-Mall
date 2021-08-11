import request from './network'
import { baseURL } from './config'

export function getMultidata() {
  return request({
    url: baseURL + '/home/multidata'
  }) 
}