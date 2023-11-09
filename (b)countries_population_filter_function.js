var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
var filter7=result.filter((p)=>p.population<200000)
var final=filter7.map((fil)=>console.log(fil.name.common))
}