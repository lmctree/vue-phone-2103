<template>
  <div class="goodslist">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset='0'
    >
      <div
        class="good_list_item"
        v-for="(item,index) in goods"
        :key="index"
        @click='goDetail("/home/goodsinfo",item.id)'
      >
        <div class="img">
          <img
            v-lazy="item.img_url"
            alt=""
          >
        </div>
        <h2>{{item.title}}</h2>
        <div class="info">
          <div class="price">
            <span class="new">{{'现价￥'+item.market_price}}</span>
            <span class="old">{{'原价￥'+item.sell_price}}</span>
          </div>
          <div class="sell">
            <span>热卖中</span>
            <span>{{'剩余'+item.stock_quantity+'件'}}</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { getGoods } from '@/api/goods.js'
export default {
  data: () => ({
    goods: [],
    pageIndex: 1,
    pageSize: 6,
    count: 0,
    loading: false,
    finished: false
  }),
  methods: {
    async getGoods() {
      const res = await getGoods({ pageIndex: this.pageIndex, pageSize: this.pageSize })
      ++this.pageIndex
      // console.log(res)
      this.goods = this.goods.concat(res.data.message)
      this.count = res.data.count
    },
    async onLoad() {
      // 异步更新数据
      await this.getGoods()

      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      if (this.goods.length >= this.count) {
        console.log(111111)
        this.finished = true
      }
    }
  },
  created() {
  }
}
</script>
<style lang="less">
.goodslist {
  padding: 0 8px;
  .van-list__finished-text,
  .van-list__loading {
    width: 100%;
    text-align: center;
  }
  .van-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .good_list_item {
      width: 48%;
      border: 1px solid #eee;
      padding: 5px;
      box-sizing: border-box;
      margin-top: 5px;

      h2 {
        font-size: 14px;
      }
      .img {
        height: 156px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .info {
        .sell {
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .price {
          font-size: 12px;
          .new {
            color: red;
            margin-right: 25px;
          }
          .old {
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>