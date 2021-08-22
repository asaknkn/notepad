var initState = {
    memos: [
        {
            id: 1,
            body: 'サンプルメモです。'
        }
    ],
};
export var mutations = {
    save: function (state, memo) {
        var max = state.memos[state.memos.length - 1].id;
        memo.id = max + 1;
        state.memos.push(memo);
    }
};
export default {
    state: initState,
    mutations: mutations
};
//# sourceMappingURL=memos.js.map