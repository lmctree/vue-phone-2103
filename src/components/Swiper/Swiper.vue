<template>
  <div>
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
          :src="item.img || item.src"
          :alt="item.id"
        >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ['lunbolist'],
  data: () => ({})
}
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  height: 200px;
  line-height: 200px;
  text-align: center;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>