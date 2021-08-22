import Vue from 'vue'
import Vuex from 'vuex'
import memos, {State as memosState} from './modules/memos'

Vue.use(Vuex);

export interface RootState {
    memos: memosState
}

export default new Vuex.Store({
    modules: {
        memos,
    },
})