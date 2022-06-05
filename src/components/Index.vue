<template>
  <div>
    <van-row>
      <van-col span="4"></van-col>
      <van-col span="12">
        <div class="top">
          <h1>{{ msg }}</h1>
          <p>数学与软件<br /></p>
        </div>
        <Centers />
      </van-col>
      <van-col span="8">
        <Right />
      </van-col>
    </van-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Centers from "./Index/Centers.vue";
import Right from "./Index/Right.vue";
import "vant/es/col/style";
import "vant/es/row/style";
import "vant/es/tab/style";
import "vant/es/tabs/style";

@Options({
  props: {
    msg: String,
  },
  components: {
    Centers,
    Right
  },
})
export default class Index extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top {
  display: block;
  color: #555;
  padding: 0px 0px 30px 15px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
