import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // 请求超时时间
  timeout: 6000
})

// 响应拦截器
request.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject(response.statusText)
  }
})

export default request
