import {GetterTree, MutationTree} from "vuex";
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

const mutations: MemoMutation = {
  save(state, memo) {
    const max = state.memos[state.memos.length - 1].id;
    memo.id = max + 1;
    state.memos.push(memo);
  }
}

const getters: MemoGetter = {
  allMemos: (state: State) => state.memos,
}

export default {
  state: initState,
  mutations,
  getters
}