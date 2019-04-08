import axios from 'axios'

const api = (
  url,
  method = 'post',
  data = {},
  params = {},
  otherOptions = {}
) => {
  if (typeof data !== 'object') {
    throw new Error('the request params expect a object not a' + typeof data)
  }
  if (typeof params !== 'object') {
    throw new Error('the request params expect a object not a' + typeof params)
  }
  // url 根据当前环境，确定请求url
  // let url = process.env.NODE_ENV === 'production' ? '../' : '../proxy/api/'
  let option = {
    url,
    method,
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    }
  }
  if (Object.values(data).length > 0 || data instanceof FormData) {
    option.data = data
  }
  if (Object.values(params).length > 0) {
    option.params = params
  }
  let obj = {...option, ...otherOptions}
  return new Promise((resolve, reject) => {
    axios(obj).then(res => {
      if (res.status !== 200) {
        reject(res.statusText)
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      if (err && err.response) {
        if (err.response.status === 401) {
          // parent.postMessage('401', '*')
          let message = '401'
          reject(message)
        } else if (err.response.status === 403) {
          let message = '没有访问权限'
          reject(message)
        } else {
          reject(err.response.data.message)
        }
      }
      reject(err.message)
    })
  })
}
export default api
