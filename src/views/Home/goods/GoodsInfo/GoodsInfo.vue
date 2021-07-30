<template>
  <div class="goodsinfo">
    <div class="swiper_box">
      <Swiper :lunbolist='lunbolist'></Swiper>
    </div>
    <div class="my_panle">
      <van-panel :title="goodsinfo.title">
        <div class="info">
          <p class="price">
            <span class="new">{{'现价￥'+goodsinfo.market_price}}</span>
            <span class="old">{{'原价￥'+goodsinfo.sell_price}}</span>
          </p>
          <p class="number">购买数量:
            <van-stepper v-model="value" />
          </p>
        </div>

        <template #footer>
          <van-button
            size="small"
            type="primary"
          >立即购买</van-button>
          <van-button
            size="small"
            type="danger"
          >加入购物车</van-button>
        </template>
      </van-panel>
    </div>
    <div class="my_panle">
      <van-panel :title="goodsinfo.title">
        <div class="content">
          <p>商品货号:{{goodsinfo.goods_no}}</p>
          <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间:{{goodsinfo.add_time}}</p>
        </div>
      </van-panel>
    </div>
  </div>
</template>
<script>
import Swiper from '@/components/Swiper/Swiper.vue'
import { getThumImages } from '@/api/photos.js'
import { getInfo } from '@/api/goods.js'
export default {
  props: ['id'],
  data: () => ({
    lunbolist: [],
    goodsinfo: {},
    value: 0
  }),
  created() {
    this.getThumImages()
    this.getInfo()
  },
  methods: {
    async getThumImages() {
      const res = await getThumImages(this.id)
      this.lunbolist = res.data.message
    },
    async getInfo() {
      const res = await getInfo(this.id)
      this.goodsinfo = res.data.message
    }
  },
  components: {
    Swiper
  }
}
</script>
<style lang="less" >
.goodsinfo {
  p {
    margin: 8px 0;
  }
  padding: 0 5px;
  .swiper_box {
    padding: 5px;
    border: 1px solid #eee;
    .my-swipe .van-swipe-item {
      height: 170px;
      line-height: 170px;
      img {
        width: 40%;
      }
    }
  }
  .my_panle {
    border: 1px solid #eee;
    margin-top: 5px;

    .van-panel__header {
      font-size: 14px;
      font-weight: 600;
    }
    .info {
      padding: 10px 16px;
      .price {
        font-size: 14px;
        .new {
          color: red;
          margin-right: 25px;
        }
        .old {
          text-decoration: line-through;
        }
      }
      .number {
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }
    }

    .van-button {
      margin-right: 20px;
    }

    .content {
      padding-left: 16px;
      box-sizing: border-box;
      font-size: 12px;
    }
  }
}
</style>