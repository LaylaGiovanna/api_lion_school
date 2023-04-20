
const { cursos } = require("../banco/cursos.js")

//_______________________________GET SUBJECTS LIST_________________________________________________________//

const getAllSubjects = function(){

    let status = false
    let jsonSubjects = {}
    let arraySubjects = []
 
    cursos.forEach(nome =>{
        arraySubjects.push(nome)
    })
    
    jsonSubjects = arraySubjects

    if(jsonSubjects != ''){
        status = true
        return jsonSubjects
    }else{
        console.log("sorry something went wrong :(")
        status = false
    }
 
}

//console.log(getAllSubjects())

//____________________________________________________________________________________________________

module.exports ={
    getAllSubjects
}
