const request = require("./request")
module.exports={
    getNoteList(data){
      let url ="pim/note/getNoteList"
      return request.post(url,data).then(res => {
          return data
      })
    },
    addNote(data){
        let url ="pim/note/addNote"
        return request.post(url,data).then(res => {
            return data
        })
    },
    editNote(data){
        let url ="pim/note/editNote"
        return request.post(url,data).then(res => {
            return data
        })
    },
    deleteNote(data){
       let url ="pim/note/deleteNote"
       return request.get(url,data).then(res => {
           return data
       })
    }
}