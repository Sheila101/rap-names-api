const express = require('express')
//use all the things in express 
const app = express()
const PORT = 8000

const rappers = {
'21 savage' : {
  'age': 29,
  'birthName':'Sheyaa Bin Abraham-Joseph',
  'birthLocation':'London, England'
}, 
'chance the rapper':{
  'age': 29, 
  'birthName': 'Chancelor Bennette', 
  'birthLocation': 'Chicago, Illinios '
}, 
'unknown':{
  'age': 0, 
  'birthName': 'Unknoown', 
  'birthLocation': 'Unknown'
}

}
//server up a file 
//dirname is telling the server to look for the file from its directory - get request for the main page, returning the file 
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

//making a request to the api - if we make a request to this api we will respond with the object savage json - get request for the api, returning a JSON File 
///api/:name addign the query 
app.get('/api/:name', (request, response)=>{
  //grabs the  query 
const rapperName = request.params.name.toLocaleLowerCase()
//if the query name on the url is a property of rappers object, then respond with json
if(rappers[rapperName]){
response.json(rappers[rapperName]) 
}else {
  response.json(rappers['unknown'])
}

})

app.listen(PORT, ()=> {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})