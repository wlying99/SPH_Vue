import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index'

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const actions = {
    //通过api里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList() {
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code == 200) {
            this.commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList() {
        let result = await reqGetBannerList();
        // console.log(result);
        if (result.code == 200) {
            this.commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList() {
        let result = await reqGetFloorList();
        // console.log(result);
        if (result.code == 200) {
            this.commit('GETFLOORLIST', result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}