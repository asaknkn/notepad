<template>
  <div class="editor">
    <Header>New Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
//import { namespace } from "vuex-class";
//const MemoModule = namespace("memos");

@Component({
  components: {
    Header,
  },
})
export default class New extends Vue {
  memoBody = "";

  save(): void {
    this.$store.dispatch("saveMemo", {
      body: this.memoBody
    });
    this.$router.push("/");
  }

  //@MemoModule.Mutation save: any
}
</script>
