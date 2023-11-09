var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
 var us=result.filter((s)=>s.currencies && s.currencies.USD)
var US=us.forEach((t)=>console.log(`${t.name.common}`))
}