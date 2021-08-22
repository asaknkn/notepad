<template>
  <div class="home">
    <ul v-for="memo in newest" :key="memo.id">
      <li>{{memo.body}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Memo} from "@/common/interface/memo";
// import { namespace } from "vuex-class";
// const MemoModule = namespace("memos");
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  get newest(): Memo[] {
    return this.$store.getters.allMemos.slice().reverse();
  }
  //@MemoModule.Getter allMemos!: Memo[];
}
</script>
