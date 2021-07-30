import Vue from 'vue'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import loading from "../assets/loading.gif"

Vue.use(Lazyload, {
  loading
})

Vue.use(Vant)