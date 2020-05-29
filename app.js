let {userApi} = require("./api/index")
App({
  onLaunch: function () {
    let app = this 
    
    app.checkUpdate()
    // app.globalData.getToken = userApi.wxLogin()
  },
  globalData: {
    userInfo: null,
    height:null,
    token:'',
    getToken:'',
    statusBarHeight:wx.getSystemInfoSync().statusBarHeight
  },
  checkUpdate: ()=>{
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      // console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  }
})