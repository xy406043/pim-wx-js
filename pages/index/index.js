const {projectApi,commonApi} = require("../../api/index")
let app = getApp()
Page({
  data: {
    timeQuanTime:1,
    topHeight: 44 + app.globalData.statusBarHeight
  },
  //options(Object)
  onLoad: function(options){

    
  },
  onReady: function(){
    
  },
  onShow: function(){
    this.getLocation()
    this.getOverView()
  },
  getOverView(){
     commonApi.getOverView().then(res => {
       console.log("res",res)
     })
  },
  getLocation(){
   const _this = this
   let time =new Date().getHours()
   if((time>=0 && time <5) || (time>23 && time<24)){
    this.setData({
      timeQuanTime:0
    })
   }
   if(time>=5 && time <9){
     this.setData({
       timeQuanTime:1
     })
   }
   if(time>=9 && time <12){
    this.setData({
      timeQuanTime:2
    })
  }
   if(time >= 12 && time <18) {
    this.setData({
      timeQuanTime:3
    })
   }
   if(time >=18 && itme <23){
    this.setData({
      timeQuanTime:4
    })
   }
  

  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  // onShareAppMessage: function(){

  // },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});