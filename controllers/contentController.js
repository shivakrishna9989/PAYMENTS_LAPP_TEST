//var app = angular.module('homeContent', ["firebase"]);
app.controller('contentController', function($scope, $firebaseArray) 
{
   // var ref = new Firebase("https://snowmantest.firebaseio.com/");
    //var authData = ref.getAuth();
    console.log(authData);

    $scope.role=null;
        if(authData){
//if we still alive we are logged in and a normal user

               ref.child("role").child(authData.uid).on("value", function(data) 
                {
            $scope.role=data.val();
                });

    $scope.userEmail = authData.password.email;

    //get the data for our pending service requests
    var service_requests = ref.child("service_requests");
    $scope.service_request_data = $firebaseArray(service_requests.orderByChild("user").equalTo(authData.uid));

              $scope.submit = function()
        {
        //save the new service request to firebase
        console.log("in the submit function"+$scope.service_name);
        service_requests.push({user: authData.uid, name: $scope.service_name, provider: "n/a", completed: false});
        $scope.service_name = "";
         }

             $scope.logout = function() 
         {
        ref.unauth();
        window.location.href = "index.html";
         }
     }

    });