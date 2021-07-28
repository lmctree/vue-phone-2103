<template>
  <div class="home">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item in lunbolist"
        :key="item.id"
      >
        <img
          :src="item.img"
          :alt="item.id"
        >
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in gridslist"
        :key="item.id"
        :icon="item.src"
        :text="item.title"
        :to='item.to'
      />
    </van-grid>
  </div>
</template>
<script>
// import axios from 'axios'
import { getLunbo, getGrids } from '../../api/home'
export default {
  data: () => ({
    lunbolist: [],
    gridslist: []
  }),
  created() {
    this.getLunbo()
    this.getGrids()
  },
  methods: {
    async getLunbo() {
      const res = await getLunbo()
      this.lunbolist = res.data.message
    },
    async getGrids() {
      const res = await getGrids()
      this.gridslist = res.data.message
    }
  }
}
</script>
<style lang="less">
.home {
  .my-swipe .van-swipe-item {
    height: 200px;
    line-height: 200px;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .van-grid-item__icon {
    font-size: 50px;
  }
}
</style>