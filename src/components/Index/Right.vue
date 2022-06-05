<template>
  <div class="right">
    <div class="right-search">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索一下"
        @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="right-video">
      <div class="right-video-title">
        <span> 👇🏻👇🏻👇🏻我亲自录制的视频课程 </span>
        <p class="common-bottom"></p>
      </div>
      <div class="right-video-img">
        <img src="../../assets/go.png" />
      </div>
    </div>
    <div class="right-artcle">
      <div class="right-artcle-title">
        <h4>最近文章</h4>
        <p class="common-bottom"></p>
      </div>
      <div class="right-artcle-content">
        <p>【置顶】Go语言学习之路/Go语言教程</p>
        <p>Apollo配置中心</p>
        <p>Protocol Buffers V3指南[翻译]</p>
        <p>RPC介绍</p>
        <p>处理并发错误</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Toast } from "vant";
import "vant/es/toast/style";
import "vant/es/search/style";
import { ref } from "@vue/reactivity";
const value = ref("golang");
export default class Right extends Vue {
  value = value;
  onSearch = (val) => Toast(val);
  onClickButton = () => Toast(value.value);
}
</script>
<style scoped>
.right {
  width: 50%;
  margin: 60px;
  border-left: 1px solid #eee;
  padding-right: 50px;
}

.right .right-search {
  margin: 30px;
}
.right .right-video {
  margin: 30px;
}
.right .right-artcle {
  margin: 30px;
}
.right .right-video .right-video-title {
  font-size: 16px;
  color: #6e7173;
  line-height: 2.7;
  margin-left: 10px;
}
.common-bottom {
  border-bottom: 1px solid #eee;
}
.right .right-video .right-video-img img {
  width: 100%;
  margin-left: 10px;
}
.right .right-artcle .right-artcle-title {
  margin-left: 10px;
}
.right .right-artcle .right-artcle-content{
  font-size: 14px;
  color: #6e7173;
  line-height: 1.7;
  margin-left: 10px;
}
</style>