//Component Object
const app=getApp()

Component({
  options:{
    multipleSlots: true //运行组件多个插槽
  },
  properties: {
    title:{type:String,value:"OPIMS"},
    showLeft:{type:Boolean,value:false},
    showHome:{type:Boolean,value:false},
    color:{type:Boolean,value:"white"}
  },
  data: {
      statusBarHeight:0,
  },
  created: function(){

  },
  attached: function(){
    this.setData({
      statusBarHeight:app.globalData.statusBarHeight
    })
    let router = getCurrentPages()  // 获取小程序页面栈
    console.log("香",this.data.statusBarHeight,router)
    if(router.length >= 2 && router[router.length-1].route!=='pages/index/index'){
      this.setData({
        showLeft:true
      })
    }
  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
  methods: {
    // 这里是一个自定义方法
    onClickLeft () {
      this.triggerEvent('click-left', true);
    },

    onClickHome () {
      this.triggerEvent('click-home', true);
    }
},
});