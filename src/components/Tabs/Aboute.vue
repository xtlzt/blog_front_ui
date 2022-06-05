<template>
  <div class="about">
    <div class="about-info">
      <h3>关于</h3>
      <p>发布于2022/06/05 ,更新于2022/06/05 18:47:11 |总阅读量：1次</p>
    </div>
    <div class="about-me">
      <h3>我是谁</h3>
      <p>
        我叫刘泽涛（机器鱼 robot fish），深漂程序员，目前在深圳南山做后端开发
      </p>
      <p>
        我的职业生涯里大公司、小公司、创业公司都待过；运维开发、后端开发、服务端开发都做过；也会写一点前端代码。
      </p>
      <p>
        我平时除了码代码之外还喜欢翻译一些英文技术文档以及录制一些编程相关的视频教程，想帮助更多的人爱上编程
      </p>
      <p>各种商务合作请邮件1606888387@qq.com</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class Aboute extends Vue {}
</script>
<style lang="scss" scoped>
.about {
  display: block;
  width: 880px;
  padding-top: 30px;
}
.about-me {
  text-align: center;
  padding-top: 30px;
}
.about-me h3 {
  text-align: center;
  color: black;
  background: linear-gradient(#fff 60%, #cf4029 40%);
}

.about-me p {
  text-align: left;
  font-size: 1em;
  line-height: 1.7;
}
</style>