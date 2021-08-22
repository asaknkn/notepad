<template>
  <div class="editor">
    <h1>Edit Memo</h1>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button>保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Memo} from "@/common/interface/memo";

@Component
export default class Edit extends Vue {
  get memo(): Memo {
    const id = Number(this.$route.params["id"]);
    const memos: Memo[] = this.$store.getters.allMemos;
    const memo = memos.find(memo => memo.id === id);
    if (memo === undefined) {
      return memos[0];
    } else {
      return memo;
    }
  }
}
</script>