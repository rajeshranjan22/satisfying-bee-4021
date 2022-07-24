createArr=JSON.parse(localStorage.getItem("createItem"))||[];
document.querySelector("#email").value=""
document.querySelector("#pass").value=""
document.querySelector("form").addEventListener("submit",create);
function create(event){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#pass").value;
   
    if( email==""||password=="")
    {
        alert("Please fill all fields!")
    }
    else if(password.length<6 || password.length>12){
alert("Please create password depending on the length");
    }
    else{
    var createObj={
        // firstName:first,
        // lastName:last,
        email:email,
        pass:password,
        // mobile:mobile,
        // dateOfBirth:dob
    }
    createArr.push(createObj);
    localStorage.setItem("createItem",JSON.stringify(createArr));
    alert("ThankYou for Creating Account in SmatBot");
    window.location.href="login.html";
}
}