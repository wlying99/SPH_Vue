import { reqGetSearchInfo } from "@/api/index";
const state = {
    //仓库初始状态
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    //获取search模块的数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};
//计算属性 在项目中为了简化仓库中的数据而存在的，
//可以把组件中要用的数据简化，在组件中获取数据时就很方便
const getters = {
    //形参state是当前仓库中的state，并非大仓库中的state
    goodsList(state) {
        return state.searchList.goodsList;
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}