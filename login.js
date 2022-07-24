var createArr=JSON.parse(localStorage.getItem("createItem"))||[];
     var c=0;
     document.querySelector("#form").addEventListener("submit",getIn);

    function getIn(e){
        
         e.preventDefault();
        var email=document.querySelector("#email").value;
        var pwd=document.querySelector("#password").value;

        
        
            // console.log(createArr[0].email,email,createArr[0].pass,pwd)
            for(i=0;i<createArr.length;i++)
            { 
                if(createArr[i].email==email && createArr[i].pass==pwd)
                {
                    c=1;
                    break;
                }
            }
        
        
        if(c==1){
            alert("Login Successfully");
            window.location.href="navbar.html";
        }
        else{
            alert("Email or Password is incorrect or You are a new user");
        }
    }

document.getElementById('createAccount').addEventListener('click', function () {
    console.log('clicked')
    window.location.href = 'create.html'
})