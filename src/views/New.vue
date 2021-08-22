<template>
  <div class="editor">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import { namespace } from "vuex-class";
//const MemoModule = namespace("memos");

@Component
export default class New extends Vue {
  memoBody = "";

  save(): void {
    this.$store.commit("save", {
      body: this.memoBody
    });
    this.$router.push("/");
  }

  //@MemoModule.Mutation save: any
}
</script>
