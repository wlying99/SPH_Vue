//当前这个模块 API接口统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList  get 无参数

export const reqCategoryList = () => {
    //发请求 axios返回结果Promise对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

//获取首页轮播图

export const reqGetBannerList = () => {
    return mockRequests({ url: '/banner', method: 'get' });
}

//获取floor的数据
export const reqGetFloorList = () => {
    return mockRequests({ url: '/floor', method: 'get' })
}

//获取搜索模块的数据 地址 ：/api/list  post请求
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//获取产品详情信息列表  地址： /api/item/{skuId}  请求方式 ：get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//将产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${ skuId }/${ skuNum }`, method: 'post' })