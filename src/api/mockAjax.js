import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//start:进度条开始  done:进度条结束
import "nprogress/nprogress.css"

//1.利用axios对象的方法create,去创建一个axios实例
//request就是axios 可以进行配置

const requests = axios.create({
    //配置对象
    //基础路径 发请求时 路径中会出现api
    baseURL: '/mock',
    //请求超时时间
    timeout: 5000
});

//请求拦截器 再发请求之前可以检测到 可以在请求发出之前做一些事情
requests.interceptors.request.use((config) => {
    //config:配置对象 对象里面有个很重要的属性 header 
    nprogress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new error('faile'));
});

export default requests