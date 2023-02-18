// get inputs form sign up page 
let uNSignUpInput = document.getElementById("unSignUp");
let emailSignUpInput = document.getElementById("emailSignUp");
let passSignUpInput = document.getElementById("passSignUp");
let btnSignUp = document.getElementById("btnUp");


let users = [];

// check if localStorage contain usres 
if(localStorage.getItem("users") != null){

    users = JSON.parse(localStorage.getItem("users"));

}



// add value to users 
btnSignUp.addEventListener("click" , () => {
    
    checkSignUpInbtEmpty();
    
    if(uNSignUpInput.value != "" && emailSignUpInput.value != "" &&   passSignUpInput.value != ""){

        let user = {
            
            name : uNSignUpInput.value,
            
            email : emailSignUpInput.value,
            
            password : passSignUpInput.value
        
        }
        let test = [];
        for(let i = 0 ; i < users.length ; i++){
            
            test.push(users[i].name);
            

        }
        if(!test.includes(user.name)){
            users.push(user);
            localStorage.setItem("users" , JSON.stringify(users));
        }        


        
        document.getElementById("progsUp").innerHTML = "Sucsess";

        document.getElementById("progsUp").classList.replace("text-danger" , "text-success");

        document.getElementById("progsUp").classList.replace("d-none" , "d-block");
        
        emptySignUpInput();
    
    }

});




// empty input 
function emptySignUpInput(){

    uNSignUpInput.value = "";

    emailSignUpInput.value = "";

    passSignUpInput.value = "";


}


// check if inputs of sign up empty 
function checkSignUpInbtEmpty(){
  
    if(uNSignUpInput.value == "" || emailSignUpInput.value == "" || passSignUpInput.value == ""){
  
        document.getElementById("progsUp").innerHTML = "All inputs is required";
        document.getElementById("progsUp").classList.replace("text-success" , "text-danger");
        document.getElementById("progsUp").classList.replace("d-none" , "d-block");
  
    }else{
  
        document.getElementById("progsUp").classList.replace("d-block" , "d-none");
  
    }

}














