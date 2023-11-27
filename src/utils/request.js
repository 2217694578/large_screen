import axios from "axios";
// import store from '@/store'; // store 可以用来存储token等信息

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API , // 基础路径
  timeout: 10 * 1000, // timeout 10s
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    // 'Authorization':"" // 如果需要验证cookie可以在头部这里携带
  }
})

// 请求拦截：发送请求之前，请求拦截器可以检测到
service.interceptors.request.use(
  config => {
    // config.headers.Authorization = ""
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    if(response.status === 200){
      return response
    }else {
      return Promise.reject(response)
    }
  },
  error => {
    console.log('response error',error.message)
    return Promise.reject(error)
  }
)

export default service