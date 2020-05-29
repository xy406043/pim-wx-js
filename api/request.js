const config = require("../config/index");
const domain = config.domain;
const code = config.code;

 function request(method, url, data) {
  const app = getApp();
  let token =wx.getStorageSync('token');
  let header = {
    "content-type": "application/json"
  };
  console.log("请求之前token",token)
  if(token){
      header.Authorization = "Bearer "+token
  }
  return new Promise((resolve, reject) => {
    console.log("!212",)
    wx.request({
      url:domain+url,
      data:data,
      header,
      method:method,
      success(res) {
        console.log("请求返回结果",res);
        if(res.statusCode===401){
          wx.showToast({
            title:"登录过期",
            duration:2000,
            mask:false
          })
          wx.setStorage({
            key: 'token',
            data: '',
          });
          setTimeout(()=>{
            wx.redirectTo({
              url: '/pages/loading/loading'
            });
          },2000)
          return 
        }
        if(res.statusCode===500){
          wx.showToast({
            title:"服务器错误",
            duration:2000,
            mask:false
          })
          wx.setStorage({
            key: 'token',
            data: '',
          });
          setTimeout(()=>{
            wx.redirectTo({
              url: '/pages/loading/loading'
            });
          },2000)
          return 
        }
        return resolve(res.data)
      },
      error(err) {
        console.log("失败",err);
        reject(err)
      },
    });
  });
}

function post(url, data = {}) {
  return request("POST", url, data);
}
function get(url, data = {}) {
  return request("GET", url, data);
}
module.exports = {
  request,
  get,
  post,
};
