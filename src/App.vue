<template>
  <div id="app">
    <!-- 头部 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 中间 -->
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to='/home'
      ></van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to='/friends'
      ></van-tabbar-item>
      <van-tabbar-item
        icon="cart-o"
        to='/cart'
        :badge='badge'
      ></van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to='/search'
      ></van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: localStorage.title || 'home',
      active: Number(localStorage.active || 0),
      badge: 6
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.meta'(meta) {
      this.title = meta.title
      this.active = meta.active

      localStorage.title = meta.title
      localStorage.active = meta.active
    }
  }
}
</script>

<style lang='less'>
/*  5. style中的 lang和scoped
 lang   设置使用某个预编译样式lang="less"
 scoped 开启组件的样式模块化，该样式只能在当前组件使用 */

#app {
  // color: red;
  padding-bottom: 55px;
}
</style>
