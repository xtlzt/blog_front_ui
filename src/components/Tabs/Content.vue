<template>
  <div class="content">
    <article class="content-article">
      <header>
        <h3>Apollo配置中心</h3>
      </header>
      <div class="content-date">
        <span>2019年9月12日</span>
        <img alt="文档" src="../../assets/doc.png" />
        <span>Golang</span>
      </div>
      <div class="content-info">
        <p>
          Apollo（阿波罗）是携程开源的一款可靠的分布式配置管理中心，它能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。
        </p>
      </div>
      <div class="content-read">
        <van-button type="default">阅读文章</van-button>
      </div>
      <p class="content-border-bottom"></p>
    </article>
    <van-pagination
      v-model="currentPage"
      :total-items="155"
      :show-page-size="10"
      force-ellipses
    />
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import "vant/es/pagination/style";
import "vant/es/button/style";
let currentPage = 1;
let totalPage = 155;
export default class Content extends Vue {
  currentPage = currentPage;
  totalPage = totalPage;
}
</script>


<style scoped>
.content {
  width: 880px;
  padding-top: 30px;
}
.content .content-border-bottom {
  border-bottom: 1px solid #eee;
}

.content .content-date {
  line-height: 30px;
  font-size: 13px;
  display: flex;
}
.content .content-date img {
  width: 20px;
  height: 20px;
  margin: 5px;
}

.content .content-read {
    text-align: right;
}
</style>