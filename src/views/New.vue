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

<style scoped>
textarea {
  width: 100%;
  height: 10em;
}
button {
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>