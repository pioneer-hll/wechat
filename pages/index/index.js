//index.js
//获取应用实例
const fetch = require('../../utils/fetch.js')
const app = getApp()

Page({
  data: {
    list:[],
    categories:[]
  },
  //事件处理函数
  
  // onLoad: function () {
    
  // },
  onLoad(options) {
    fetch('slides')
      .then(res => {
        this.setData({ slides: res.data })
      })
    fetch('categories')
      .then(res => {
        this.setData({ categories: res.data })
      })
  }
})
