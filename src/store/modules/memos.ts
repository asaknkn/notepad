import {GetterTree, MutationTree, ActionTree} from "vuex";
import {Memo} from "@/common/interface/memo";
import {RootState} from '@/store';


export interface State {
  memos: Memo[]
}

const initState = {
  memos: [
    {
      id: 1,
      body: 'サンプルメモです。'
    }
  ],
}

type MemoMutation = MutationTree<State>
type MemoGetter = GetterTree<State, RootState>
type MemoAction = ActionTree<State, RootState>

const mutations: MemoMutation = {
  save(state, memo) {
    const max = state.memos[state.memos.length - 1].id;
    memo.id = max + 1;
    state.memos.push(memo);
  },
  update(state, data) {
    const x = state.memos.find(memo => memo.id === data.id);
    if (x !== undefined) {
      x.body = data.body;
    }
  }
}

const getters: MemoGetter = {
  allMemos: (state: State): Memo[] => state.memos,
}

 const actions: MemoAction = {
  saveMemo({commit}, memo: Memo): void {
    commit('save', memo);
  },
  updateMemo({commit}, data: Memo): void {
    commit('update', data);
  }
 }

export default {
  state: initState,
  mutations,
  getters,
  actions,
  namespaced: true
}