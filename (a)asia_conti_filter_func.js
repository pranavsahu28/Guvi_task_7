var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
 var filter2=result.filter((element)=>console.log(element.region))
}