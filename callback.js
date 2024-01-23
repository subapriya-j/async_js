//callback
function ramusomu(WelcomeMessage,callback)
{
 setTimeout(function(){
    console.log(WelcomeMessage)
    callback();
   
  },20000)
}
function miniAni()
{
    console.log("odi poiru vanthudatha da thambi!!!")
}
ramusomu("Hello Ramu and Somu\nWelcome to KEC",miniAni)
// form submission example

function submitform(buttonClick,db)    //parent function(work to check whether button clicked)
{
 setTimeout(function()
 {
  console.log(buttonClick)//functionalities 
   db();
 },2000)
}



function database(){     //callback function
  console.log("Form submitted successfully")
}
submitform("Form submit button clicked",database)