function isAuthenticated()
{
return Math.random()>1;
}



function login()
{
 return new Promise(function(response,noresponse){
 
setTimeout(function(){
    if(isAuthenticated()){
        response("Your authentication is not successfull")
    }
    
    else
    {
        noresponse("Your authentication is not successfull") 
    }

},1000);
});
}
login()
.then(function(message)
{
    console.log(message);
})
.catch(function(message)
{
    console.log(message);
})