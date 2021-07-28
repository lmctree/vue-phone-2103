<template>
  <div class="newsinfo">
    <van-panel
      :title="newsinfo.zhaiyao"
      :status="'阅读'+newsinfo.click"
    >
      <div>{{newsinfo.content}}</div>
    </van-panel>
    <Comment :id='id'></Comment>
  </div>
</template>
<script>
import { getNewsInfo } from '@/api/news.js'
import Comment from '../../../../components/Comment/index.vue'
export default {
  props: ['id'],
  data: () => ({
    newsinfo: {}
  }),
  created() {
    this.getNewsInfo()
  },
  methods: {
    async getNewsInfo() {
      const res = await getNewsInfo(this.id)
      this.newsinfo = res.data.message
    }
  },
  components: {
    Comment
  }
}
</script>
<style lang="less" scoped>
.newsinfo {
  padding: 0 10px;
  .van-cell__value {
    flex: 0.5;
  }
  .van-cell__title {
    font-weight: 700;
    font-size: 14px;
  }
  .van-panel__content {
    font-size: 12px;
    text-indent: 2em;
    div {
      line-height: 20px;
      padding: 5px 0;
    }
  }
}
</style>