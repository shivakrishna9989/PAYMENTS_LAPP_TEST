var app = angular.module('home', ["firebase"]);
var ref = new Firebase("https://snowmantest.firebaseio.com/");
var authData = ref.getAuth();
app.controller('loginRedirect', function($scope, $firebaseArray) 
{
        if(authData)
    {

      ref.child("role").child(authData.uid).on("value", function(data) 
        {
            if(data.val() == "provider")
            {
                window.location.href = "providerHome.html";
            }

            else if(data.val() == "admin")
            {
                window.location.href = "adminHome.html";
            }
            else if(data.val() == "user")
            {
                console.log("shiva");
                window.location.href = "home.html";
            }
        });
    }

    else{

 window.location.href = "index.html";
    }
    

    
});
