//当前这个模块 API接口统一管理
import requests from './request'

//三级联动接口
///api/product/getBaseCategoryList  get 无参数

export const reqCategoryList = () => {
    //发请求 axios返回结果Promise对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}