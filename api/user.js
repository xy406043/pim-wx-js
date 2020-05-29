const request = require("./request.js");

module.exports = {
  wxLogin(p) {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (data) => {
          console.log("微信获取成功",data)
          let params ={
            code:data.code
          }
          let app = getApp();
          request
            .post("wx/user/wxLogin",params)
            .then((res) => {
              console.log("wx登录成功提示 ")
              if (res.code === 0) {
                app.globalData.token = res.result.token;
              } else {
                reject();
              }
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  login(data){
     let url ="pim/user/login"
     return request.post(url,data).then(data => {
       return data
     })
  },
  getUserInfo(data){
      let url ="pim/user/getUserInfo"
      return request.get(url,data).then(data => {
          return data
      })
  }
};
