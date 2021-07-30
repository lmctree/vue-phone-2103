<template>
  <div class="photolist">
    <van-tabs animated>
      <van-tab
        v-for="item in photolist"
        :key="item.id"
      >
        <template #title>
          <div @click='getImages(item.id)'>
            {{item.title}}
          </div>
        </template>
        <div
          class="img_box"
          v-if='images.length'
        >
          <img
            v-for='img in images'
            :key="img.id"
            v-lazy="img.img_url"
            alt=""
            @click='goDetail("/home/photoinfo",img.id)'
          >
        </div>
        <div v-else>
          <h3>暂无数据</h3>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getImgCategory, getImages } from '@/api/photos.js'
export default {
  data: () => ({
    photolist: [],
    images: []
  }),
  created() {
    this.getImgCategory()
    this.getImages(0)
  },
  methods: {
    async getImgCategory() {
      const res = await getImgCategory()
      res.data.message.unshift({
        id: 0,
        title: '全部'
      })
      this.photolist = res.data.message
    },
    async getImages(id) {
      const res = await getImages(id)
      this.images = res.data.message
    }
  }
}
</script>
<style lang="less" scope>
.photolist {
  .van-tab__pane {
    padding: 0 8px;
  }
  .img_box {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>