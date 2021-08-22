<template>
  <div class="home">
    <Header>My Memos</Header>
    <ul v-for="memo in newest" :key="memo.id">
      <li>
        <router-link :to="{name: 'Edit', params: {id: memo.id}}">
          {{memo.body}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Memo} from "@/common/interface/memo";
// import { namespace } from "vuex-class";
// const MemoModule = namespace("memos");
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {
  get newest(): Memo[] {
    return this.$store.getters.allMemos.slice().reverse();
  }
  //@MemoModule.Getter allMemos!: Memo[];
}
</script>

<style>
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
