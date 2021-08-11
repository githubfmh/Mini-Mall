// pages/home/home.js
import {
  getMultidata 
} from '../../service/home.js'

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选']
  },

  onLoad(options) {
    // 1. 请求轮播图以及推荐数据
    getMultidata().then(res => {
      // 取出轮播图和推荐的数据
      const data = res.data.data
      const banners = data.banner.list;
      const recommends = data.recommend.list;

      // 将banners和recommend放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;
    console.log(index)
  }
})