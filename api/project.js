const request = require("./request")

module.exports ={
    getProjectList(data){
        let url ="pim/project/getProjectList"
        return request.post(url,data).then(data =>{
            return data
        })
    },
    addProject(data){
        let url ="pim/project/addProjet"
        return request.post(url,data).then(data=>{
            return data
        })
    },
    editProject(data){
        let  url = "pim/project/editProject"
        return request.post(url,data).then(data => {
            return data
        })
    },
   deleteProject(data){
       let url="pim/project/deleteProject"
       return request.get(url,data).then(data => {
           return data
       })
   },
   getProjectDetail(data){
       let url="pim/project/getProjectDetail"
       return request.get(url,data).then(data => {
           return data
       })
   },
   addTodo(data){
       let url ="pim/todo/addTodo"
       return request.post(url,data).then(data => {
           return data
       })
   },
   getTodoDetail(data){
       let url ="pim/todo/getTodoDetail"
       return request.post(url,data).then(data => {
           return data
       })
   },
   editTodo(data){
       let url ="pim/todo/getTodoDetail"
       return request.post(url,data).then(data => {
           return data
       })
   },
   deleteTodo(data){
       let url="pim/todo/deleteTodo"
       return request.post(url,data).then(res =>{
           return data
       })
   }
}