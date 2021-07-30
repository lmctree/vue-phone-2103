import Vue from 'vue'

Vue.mixin({
  methods: {
    goDetail(url, id) {
      this.$router.push(url + '/' + id)
    }
  }
})