<template>
  <div class="photoinfo">
    <div class="newsinfo">
      <van-panel
        :title="imageInfo.title"
        :status="'阅读'+imageInfo.click"
      >
        <div class="img_box">
          <img
            v-for='(item,index) in thumImages'
            :key='item.id'
            :src="item.src"
            alt=""
            @click='ImagePreview(index)'
          >
        </div>
        <div>{{imageInfo.content}}</div>
      </van-panel>
      <Comment :id='id'></Comment>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
import { getImageInfo, getThumImages } from '@/api/photos.js'
import Comment from '@/components/Comment/index.vue'
export default {
  props: ['id'],
  data: () => ({
    imageInfo: {},
    thumImages: []
  }),
  methods: {
    async getImageInfo() {
      const res = await getImageInfo(this.id)
      this.imageInfo = res.data.message
    },
    async getThumImages() {
      const res = await getThumImages(this.id)
      this.thumImages = res.data.message
      // console.log(this.thumImages)
    },
    ImagePreview(startPosition) {
      const images = []
      this.thumImages.forEach(item => images.push(item.src ? item.src : ''))
      ImagePreview({
        images,
        startPosition
      })
    }
  },
  created() {
    this.getImageInfo()
    this.getThumImages()
  },
  components: {
    Comment
  }
}
</script>
<style lang="less" scoped>
.photoinfo {
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
    .img_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: 30%;
      }
    }
  }
}
</style>