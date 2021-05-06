

function ajaxcall(){
    //Creating XHR Object//
    $(".t1").find("thead","tbody").empty();
    var xhttp= new XMLHttpRequest();
    //Event Listener//
    xhttp.onreadystatechange = function(){
        //condition
        
        if(this.readyState==4 &&this.status==200){
            var data= JSON.parse(this.responseText);
           
              
                var row = document.getElementById("thead").insertRow(0);
             var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              cell1.outerHTML = "<th>Title</th>";
               cell2.outerHTML = "<th>Completed Status</th>";
            for (i=0;i<data.length;i++){
                var row = document.getElementById("tbody").insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
               cell1.innerHTML = data[i].title;
               
               if(data[i].completed){
                cell2.innerHTML="<input type=checkbox disabled=true checked>";}
                else{
                   cell2.innerHTML="<input type=checkbox class=checks>";
                   
                }
              
            }
            
   
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();}
    var count=0;
    $(document).ready(function(){
        
        $("body").on("change",".checks",()=>{
            var stcheck=new Promise(function(resolve,reject){
                count=$(".checks:checked").length;
                 
                      if(count==5){
                          resolve("Congrats. 5 Tasks have been Successfully Completed")
                    }      
                
            });
                stcheck.
                then(function(s){
                           alert(s);
                          });  

                
        });
        
    });
    
   
     
        
        