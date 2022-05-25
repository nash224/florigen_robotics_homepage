//index.js
// import config from "../../config/config.json";
export default {
    namespaced: true,
    state:{
        currentPageIndex: 0
    },
    mutations: {
        setPageIndex(state, index){
            state.currentPageIndex = index;
            console.log("Set page index: "+state.currentPageIndex);
        }

    },
    actions: {
        setPageIndex({commit}, index){
            commit('setPageIndex', index);
        }
    },
    getters: {
        currentPageIndex: state => { return state.currentPageIndex }
        
    }
}