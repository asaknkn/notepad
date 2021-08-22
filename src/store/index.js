import Vue from 'vue';
import Vuex from 'vuex';
import memos from './modules/memos';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        memos: memos,
    },
});
//# sourceMappingURL=index.js.map