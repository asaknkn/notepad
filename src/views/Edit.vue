<template>
  <div class="editor">
    <Header>Edit Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Memo} from "@/common/interface/memo";
import Header from '@/components/Header.vue'; 

@Component({
  components: {
    Header,
  },
})
export default class Edit extends Vue {
  memoBody = '';

  mounted(): void {
    const id = Number(this.$route.params["id"]);
    const memos: Memo[] = this.$store.getters.allMemos;
    const memo = memos.slice().find(memo => memo.id === id);
    if (memo === undefined) {
      this.memoBody = memos[0].body;
    } else {
      this.memoBody = memo.body;
    }
  }

  save(): void {
    this.$store.commit("update", {
      id: this.$route.params["id"],
      body: this.memoBody
    });
    this.$router.push('/');
  }
}
</script>