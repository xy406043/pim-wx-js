const { userApi } = require("../../api/index");
const CryptoJS = require("../../libs/crypoto");
const app = getApp();
Page({
  data: {
    email: "",
    userName: "",
    password: "",
    doToken:true,

  },
  //options(Object)
  onLoad: function (options) {
    // app.globalData.getToken.then((res) => {
    //   this.getUserInfo();
    // });
    wx.getStorage({
      key: "token",
      success: (result) => {
        console.log("获取结果",result)
        if(result.data){
          this.setData({
            doToken:true
          })
          setTimeout(()=>{
            wx.navigateTo({
              url: "/pages/index/index",
            });
          })
        }else{
          this.setData({
            doToken:false
          })
        }
      
      },
      fail:(result) =>{
        this.setData({
          doToken:false
        })
      }
    });
  },
  onReady: function () {},
  onShow: function () {
    
  },
  getUserInfo() {},
  inputUserName(e) {
    this.setData({
      userName: e.detail.value,
    });
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    });
  },
  login() {
    let { userName, password } = this.data;
    if (userName === "" || password === "") {
      wx.showToast({
        title: "请正确输入",
      });
    }
    let p = {
      userName,
      password: CryptoJS.encode(password),
    };
    userApi.login(p).then((res) => {
      if (res.code === 0) {
        console.log("登陆结果", res.result);
        let { id, token } = res.result;
        wx.setStorage({
          key: "token",
          data: token,
        });
        // app.globalData.token = token
        // app.globalData.id = id

        wx.setStorage({
          key: "id",
          data: id,
        });
        wx.navigateTo({
          url: "/pages/index/index",
        });
      }
    });
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  // onShareAppMessage: function(){

  // },
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
