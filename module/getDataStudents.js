
const { alunos } = require("../banco/alunos.js")

//_________________________________GET STUDENTS LIST_____________________________________________________

const getAllStudents = function(){

    let status = false
    let jsonStudents= {}
    let arrayStudents = []
 
    alunos.forEach(alunos =>{
        arrayStudents.push(alunos)
    })
    
    jsonStudents = arrayStudents

    if(jsonStudents != ''){
        status = true
        return jsonStudents
    } else{
        console.log("")
        return status
    }
}
//console.log(getAllStudents())
//getAllStudents()


//_______________________________________ GET STUDENTS FOR SUBJECT__________________________________________

const getStudentForSubject = function(a){

    let status = false 

    if(a == "DS" ){
        a = "001 - Técnico em Desenvolvimento de Sistemas"
    }
    else if(a == "RDS"){
        a = "001 - Técnico em Redes de Computadores"
    }
    else{
        console.log("Please insert valid data, which can be 'DS' or 'RDS' \n make sure to also check your spelling ;)")
        return status
    }

    let arrayAllStudents =[]
    let jsonStudentsSubject ={}

    arrayAllStudents.push(getAllStudents())

    const arrayStudentsSubject = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.curso[0].nome == a  )

    jsonStudentsSubject = arrayStudentsSubject

    if(jsonStudentsSubject != ''){
        status = true
        return jsonStudentsSubject
    }
    return jsonStudentsSubject
}
//"001 - Técnico em Redes de Computadores"
//"001 - Técnico em Desenvolvimento de Sistemas"
//console.log(getStudentForSubject("RDS"))

//_________________________________GET a SPECIFIC STUDENT_____________________________________________________

const getStudentByRegistration = function(desirableRegistration){

    
    let arrayAllStudents =[]
   
    jsonStudentsStatus ={}

    arrayAllStudents.push(getAllStudents())

    const arrayStudentRegistration = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.matricula === desirableRegistration )

    jsonStudentsStatus = arrayStudentRegistration

    return jsonStudentsStatus
}
//console.log(getStudentByRegistration("20151001007"))
//getSpecificStudent()

//_______________________________________ GET STUDENTS FOR STATUS__________________________________________//

const getStudentsForStatus = function(desirableSubject,desirableStatus){

    let status = false

    if(desirableSubject == ''){
        console.log("Please insert valid data on the first endpoint, which can be 'DS' or 'RDS'\n make sure to also check your spelling ;)")
        return status
    }

    let arrayAllStudents =[]
    jsonStudentsStatus ={}

    arrayAllStudents.push(getStudentForSubject(desirableSubject))

    const arrayStudentsStatus = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.status == desirableStatus )

    jsonStudentsStatus = arrayStudentsStatus
    
        if(arrayStudentsStatus == ''){
                 console.log("Please insert valid data, which can be 'Cursando' or 'Finalizado'\n make sure to also check your spelling ;)")
                return status
        }else{
                status = true
                return jsonStudentsStatus
        }

}

//console.log(getStudentsForStatus("RDS","Cursando"))

//_______________________________________ GET STUDENTS FOR YEAR__________________________________________//

const getStudentByYear = function(desirableSubject,desirableYear){

    let status = false

    let arrayAllStudents =[]
    let jsonStudentsSubject ={}

    if(desirableSubject == '' ){
        console.log("Please insert valid data on the first endpoint, which can be 'DS' or 'RDS'\n make sure to also check your spelling ;)")
        return status
    }
     if (desirableYear == ''|| isNaN(desirableYear) ){
        console.log("Please insert valid data on the first endpoint, which can be a year in numeric value \n make sure to also check your spelling ;)")
         return status
    }
  
    arrayAllStudents.push(getStudentForSubject(desirableSubject))

    const arrayStudentsSubject = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.curso[0].conclusao == desirableYear  )

    jsonStudentsSubject = arrayStudentsSubject

    return jsonStudentsSubject
}

//getStudentByYear("2024")
//console.log(getStudentByYear("DS","2022"))

//_______________________________________ GET STUDENTS FOR YEAR AND STATUS__________________________________________//



const getStudentByYearAndStatus = function(desirableSubject,desirableYear,desirableStatus){

    let status = false

    let arrayAllStudents =[]
    let jsonStudentsSubject ={}

    if(desirableSubject == '' ){
        console.log("Please insert valid data on the first endpoint, which can be 'DS' or 'RDS'\n make sure to also check your spelling ;)")
        return status
    }
     if (desirableYear == ''|| isNaN(desirableYear) ){
        console.log("Please insert valid data on the first endpoint, which can be a year in numeric value \n make sure to also check your spelling ;)")
         return status
    }
    if (desirableStatus == ''){
        console.log("Please insert valid data on the first endpoint, which can be 'Cursando' or 'Finalizado' \n make sure to also check your spelling ;)")
         return status
    }
  
    arrayAllStudents.push(getStudentByYear(desirableSubject,desirableYear))

    const studentYearStatus = arrayAllStudents[0].filter
    ( arrayAllStudents => arrayAllStudents.status == desirableStatus)

    jsonStudentsSubject = studentYearStatus

    return jsonStudentsSubject
}

//console.log(getStudentByYearAndStatus("DS","2023","Cursando"))
//aaa
//________________________________________EXPORTS__________________________________________________________

module.exports ={
   getAllStudents,
   getStudentByRegistration,
   getStudentForSubject,
   getStudentsForStatus,
   getStudentByYear,
   getStudentByYearAndStatus
}
