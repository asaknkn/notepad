import {MutationTree} from "vuex";

export interface Memos {
  id: number,
  body: string
}


export interface State {
  memos: Memos[]
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

export const mutations: MemoMutation = {
  save(state, memo) {
    const max = state.memos[state.memos.length - 1].id;
    memo.id = max + 1;
    state.memos.push(memo);
  }
}

export default {
  state: initState,
  mutations
}