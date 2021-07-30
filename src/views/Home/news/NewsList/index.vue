<template>
  <div class="newslist">
    <van-card
      v-for="item in newslist"
      :key="item.id"
      :title="item.title"
      :thumb="item.img_url"
      @click='goDetail("/home/newsinfo",item.id)'
    >
      <template #price>
        <div>
          {{item.add_time}}
        </div>
      </template>
      <template #num>
        <div>
          阅读{{item.click}}次
        </div>
      </template>

      <template #desc>
        <div class="van-multi-ellipsis--l2 tI">
          {{item.content}}
        </div>
      </template>
    </van-card>
  </div>
</template>
<script>
import { getNewsList } from '@/api/news.js'
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNewsList()
  },
  methods: {
    async getNewsList() {
      const res = await getNewsList()
      this.newslist = res.data.message
      // console.log(res)
    }
    // goDetail(id) {
    //   this.$router.push('/home/newsinfo/' + id)
    // }
  }
}
</script>
<style lang="less" scoped>
.newslist {
  .van-card__content {
    min-height: 55px;
  }
  .van-card__thumb {
    width: 100px;
    height: 75px;
  }
  // .van-card__desc {
  //   min-height: 50px;
  // }
  .van-card__price {
    color: red;
  }
  .van-card__title {
    /* 一行显示*/
    -webkit-line-clamp: 1;
    /* 将对象作为弹性伸缩盒子模型显示 */
    display: -webkit-box;
    /*子元素的排列方式 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    margin-bottom: 2px;
  }
  .tI {
    text-indent: 1em;
  }
}
</style>