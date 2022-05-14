import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车后（发请求），欠条将参数带给服务器
        //服务器写入数据成功 并没有返回其他的数据 指示返回 code = 200 ,代表成这次操作功
        //因为服务器没有返回其他的数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise(reject(new Error('fail')))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}