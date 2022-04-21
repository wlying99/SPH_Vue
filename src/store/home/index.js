import { reqCategoryList } from '@/api/index'

const state = {
    categoryList: []
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
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
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}