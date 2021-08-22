var initState = {
    memos: [
        {
            id: 1,
            body: 'サンプルメモです。'
        }
    ],
};
var mutations = {
    save: function (state, memo) {
        var max = state.memos[state.memos.length - 1].id;
        memo.id = max + 1;
        state.memos.push(memo);
    },
    update: function (state, data) {
        var x = state.memos.find(function (memo) { return memo.id === data.id; });
        if (x !== undefined) {
            x.body = data.body;
        }
    }
};
var getters = {
    allMemos: function (state) { return state.memos; },
};
export default {
    state: initState,
    mutations: mutations,
    getters: getters
};
//# sourceMappingURL=memos.js.map