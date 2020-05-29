const request = require("./request")
module.exports={
   addGroup(data){
       let url ="pim/common/group"
       return request.get(url,data).then(res => {
           return  data
       })
   },
   getOverView(data){
       let url ="pim/common/getOverView"
       return request.get(url,data).then(res => {
           return data
       })
   }
}