// get inputs form sign up page 
let emailSignInInput = document.getElementById("emailSignIn");
let passSignInInput = document.getElementById("passSignIn");
let btnSignIn = document.getElementById("btnIn");


let users = JSON.parse(localStorage.getItem("users"));


btnSignIn.addEventListener("click" , () => {

    checkSignInInbtEmpty();
   
    if(emailSignInInput.value != "" && passSignInInput.value != ""){

        hasExist();
    
        emptyInput();

    }

});




// check if email and password exist 
function hasExist(){
    for(let i = 0 ; i < users.length ; i++){
        
        if(users[i].email === emailSignInInput.value && users[i].password === passSignInInput.value){
            localStorage.setItem("name" , JSON.stringify(users[i].name));

            window.open("dashbord.html" ," _self");
            
        }else{

            document.getElementById("progsIn").innerHTML = "incorrect email or password";
 
            document.getElementById("progsIn").classList.replace("d-none" , "d-block");
 
        }
 
    }
    
}





// check if inputs of sign in empty 
function checkSignInInbtEmpty(){
    
    if( emailSignInInput.value == "" || passSignInInput.value == ""){
        
        document.getElementById("progsIn").innerHTML = "All inputs is required";
        
        document.getElementById("progsIn").classList.replace("d-none" , "d-block");
        
  
    }else{
  
        document.getElementById("progsIn").classList.replace("d-block" , "d-none");
  
    }

}


// empty inputs 
function emptyInput(){

    emailSignInInput.value = "";
    
    passSignInInput.value = "";

}