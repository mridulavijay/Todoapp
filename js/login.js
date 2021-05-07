let uname=document.getElementById("uname");
let password=document.getElementById("pwd");


function validate(callback){
 if(uname.value==""||password.value=="")
   {
       alert("Fields cannot be empty");
       return false;
   }
   else if(uname.value=="admin"&&password.value=="12345"){
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

