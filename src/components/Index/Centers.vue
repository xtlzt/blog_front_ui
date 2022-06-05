<template>
  <div class="tabs">
    <van-tabs color="#eee" line-height="1px" v-model:active="activeName" @click-tab="onClickTab">
      <van-tab title="内容" name="a">
        <Content />
      </van-tab>
      <van-tab title="归档" name="b">
        <Menu />
      </van-tab>
      <van-tab title="关于" name="c">
        <Aboute />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Aboute from "../Tabs/Aboute.vue";
import Menu from "../Tabs/Menu.vue";
import Content from "../Tabs/Content.vue";
import { ref } from "@vue/reactivity";
import { Toast } from "vant";
import "vant/es/toast/style";
const activeName = ref("a");
@Options({
  components:{
    Aboute,
    Menu,
    Content
  }
})
export default class Centers extends Vue {
  activeName = activeName;
  mounted() {
    console.log(this.activeName);
  }
  onClickTab = ({ title }) => Toast(title);
}
</script>

<style lang="scss" scoped>
.tabs{
  width: 20%;
}
</style>