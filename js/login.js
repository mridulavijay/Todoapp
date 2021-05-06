let email=document.getElementById("email");
let password=document.getElementById("pwd");


function validate(callback){
 if(email.value==""||password.value=="")
   {
       alert("Fields cannot be empty");
       return false;
   }
   else if(email.value=="admin"&&password.value=="12345"){
     callback();
   }
   else{
    alert("Username or Password is incorrect");
    return false;
   }
}

function v_cal(){
  alert("Validation is proper");
  return true;
}

