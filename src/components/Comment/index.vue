<template>
  <div class="comment">
    <van-field
      v-model="message"
      rows="2"
      autosize
      label="发表评论"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
    <van-button
      type="primary"
      block
      @click='postComment'
    >提交评论</van-button>
    <div class="list">
      <van-card
        v-for='(item,index) in comments'
        :key='index'
        :desc="item.content"
      >
        <template #title>
          <div>
            <van-rate
              v-model="value"
              readonly
            />
          </div>
        </template>
        <template #price>
          <div>
            {{item.add_time+'--'+ item.id}}
          </div>
        </template>
        <template #thumb>
          <div>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
            <div class="username">Svip{{item.user_name}}</div>
          </div>
        </template>
      </van-card>
      <van-button
        type="warning"
        block
        :disabled='hasMore'
        @click='getMore'
      >{{change}}</van-button>
    </div>
  </div>
</template>
<script>
import { getComments, postComments } from '@/api/news.js'
export default {
  props: ['id'],
  data: () => ({
    message: '',
    pageIn: 1,
    pageLi: 10,
    value: 5,
    comments: [],
    hasMore: false
  }),
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      const res = await getComments({ id: this.id, pageIn: this.pageIn, pageLi: this.pageLi })
      ++this.pageIn
      this.comments = this.comments.concat(res.data.message)
      this.hasMore = this.pageIn * this.pageLi >= res.data.count
    },
    async getMore() {
      this.getComments()
    },
    async postComment() {
      // 添加评论到数据库
      postComments({ id: this.id, content: this.message })
      // 页面添加假评论
      this.comments.unshift({
        user_name: '匿名用户',
        add_time: Date.now(),
        content: this.message
      })
      this.message = ''
    }
  },
  computed: {
    change() {
      return this.hasMore ? "没有了!!" : "加载更多"
    }
  }
}
</script>
<style lang="less" scoped>
.comment {
  .van-cell {
    border: 1px solid #ddd;
    margin: 5px 0;
  }
  .van-card {
    margin-top: 5px;
    // height: 80px;
    .van-icon__image {
      font-size: 50px;
    }
    .username {
      font-size: 12px;
    }
  }
}
</style>