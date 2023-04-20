/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objetivp : Create an api tahth will alow a site works with a mock
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 1-04-2023
 * Version: 1.0 
 * _____________________________________________________________________________________________________________________________________________________________//
 * 
 * Express - permite a integraçao entre http com o codigo 
 * npm install express --save
 * 
 * Cors - Tambem usa-se o cors (um gerenciador de permissoes para o protocolo htttp 
 * npm instal cors --save)
 * 
 * Body-paser  - è uma dependencia que permite manipular dados enviados pela requisicap
 * npm install body-parser --save
 * 
 * 
 * NUNCA MECHA NO NODE MODULES*/


const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const { cursos } = require('./banco/cursos');

const { getAllSubjects } = require('./module/getDataSubjects');

const { getAllStudents } = require('./module/getDataStudents');

const { json } = require('body-parser');


const app = express();

//___________________________________PERMISIONS__________________________________________________________________//


app.use((request,response,next)=>{

    response.header('Access-Control-Allow-Origin','*')

    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//___________________________________________Get list subjects___________________________________________________________//
app.get('/v1/lion-school/cursos', cors(),async function(request,response,next){

    const listStudents = require('./module/getDataSubjects.js')

    let students = listStudents.getAllSubjects()

     if(students){
    response.json(students)
    response.status(200)
     }else{
         response.status(500)
     }

})
//___________________________________________Get list all student___________________________________________________________//
app.get('/v1/lion-school/alunos', cors(),async function(request,response,next){

    const listSubjects = require('./module/getDataStudents.js')

    let subjects = listSubjects.getAllStudents()

     if(subjects){
    response.json(subjects)
    response.status(200)
     }else{
         response.status(500)
     }

})
//___________________________________________Get students for subjects___________________________________________________________//

app.get('/v1/lion-school/alunos/cursos/:sd', cors(),async function(request,response,next){

    let subjectAcronym = request.params.sd
    let statusCode
    let studentsData = {}

    if(subjectAcronym == '' || subjectAcronym == undefined ){
    
        statusCode = 400
        studentsData.message = "It is not possible to process the request because the abbreviation of the subject was not informed or does not understand the number of characters"
        
    }else{
        const listStudents = require('./module/getDataStudents.js')

    let studentsBySubject = listStudents.getStudentForSubject(subjectAcronym)

            statusCode = 200
            studentsData = studentsBySubject

     
    response.status(statusCode)
    response.json(studentsData)
    console.log(subjectAcronym)
    }
    
})

//___________________________________________Get students for registration___________________________________________________________//

app.get('/v1/lion-school/alunos/matriculas/:sd', cors(),async function(request,response,next){

    let registration = request.params.sd
    let statusCode
    let studentsData = {}

    if(registration  == '' || registration == undefined ){
    
        statusCode = 400
        
    }else{
        const listStudents = require('./module/getDataStudents.js')

    let studentsBySubject = listStudents.getStudentByRegistration(registration )

            statusCode = 200
            studentsData = studentsBySubject

     
    response.status(statusCode)
    response.json(studentsData)
    console.log(registration )
    }
    
})

//___________________________________________Get students for status___________________________________________________________//

app.get('/v1/lion-school/alunos/status/:st/:ds', cors(),async function(request,response,next){

    let subjectAcronym = request.params.st
    let desirableStatus = request.params.ds
    let statusCode
    let studentsData = {}

    const listStudents = require('./module/getDataStudents.js')

    let studentsBySubject = listStudents.getStudentsForStatus(subjectAcronym,desirableStatus)

        statusCode = 200
        studentsData = studentsBySubject
     
    response.status(statusCode)
    response.json(studentsData)
    console.log(subjectAcronym)

})

//___________________________________________Get students by year___________________________________________________________//

app.get('/v1/lion-school/cursos/ano/:st/:dy', cors(),async function(request,response,next){

    let subjectAcronym = request.params.st
    let desirableYear = request.params.dy
    let statusCode
    let studentsData = {}

    const listStudents = require('./module/getDataStudents.js')

    let studentsBySubject = listStudents.getStudentByYear(subjectAcronym,desirableYear)

        statusCode = 200
        studentsData = studentsBySubject
     
    response.status(statusCode)
    response.json(studentsData)
    console.log(subjectAcronym)

})

//___________________________________________Get students by year and status___________________________________________________________//

app.get('/v1/lion-school/cursos/ano/status/:st/:dy/:ds', cors(),async function(request,response,next){

    let subjectAcronym = request.params.st
    let desirableYear = request.params.dy
    let desirableStatus = request.params.ds
    let statusCode
    let studentsData = {}

    const listStudents = require('./module/getDataStudents.js')

    let studentsBySubject = listStudents.getStudentByYearAndStatus(subjectAcronym,desirableYear,desirableStatus)

        statusCode = 200
        studentsData = studentsBySubject
     
    response.status(statusCode)
    response.json(studentsData)
    console.log(subjectAcronym)

})

//_________________________________________________________________________________________________________

app.listen(8080,function(){
    console.log("Server aguardando requisiçoes")
})
