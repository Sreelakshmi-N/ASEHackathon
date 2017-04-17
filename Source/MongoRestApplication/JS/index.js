/**
 * Created by sreel on 4/9/2017.
 */
/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.insertDatas = function(){
        console.log($scope.formData.fname);
        console.log($scope.formData.dov);
        console.log($scope.formData.pres);
        console.log($scope.formData.age);
        console.log($scope.formData.msg);
        var dataParams = {
            'fname' : $scope.fname,
            'dov' : $scope.dov,
            'pres' : $scope.pres,
            'age' : $scope.age,
            'msg' : $scope.msg

        };

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

   /* $scope.insertData1 = function(){
        console.log($scope.formData.fname);
        console.log($scope.formData.pno);
        console.log($scope.formData.email);
        console.log($scope.formData.age);
        console.log($scope.formData.msg);
        var dataParams = {
            'fname' : $scope.fname,
            'dov' : $scope.pno,
            'sym' : $scope.email,
            'age' : $scope.age,
            'msg' : $scope.msg

        };

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };*/

    $scope.insertData = function(){
        console.log($scope.formData.fname);
        console.log($scope.formData.pno);
        console.log($scope.formData.email);
        console.log($scope.formData.age);
        console.log($scope.formData.msg);
        var dataParams = {
            'fname' : $scope.fname,
            'pno' : $scope.pno,
            'email' : $scope.email,
            'age' : $scope.age,
            'msg' : $scope.msg

        };

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    /* $scope.insertData1 = function(){
     console.log($scope.formData.fname);
     console.log($scope.formData.pno);
     console.log($scope.formData.email);
     console.log($scope.formData.age);
     console.log($scope.formData.msg);
     var dataParams = {
     'fname' : $scope.fname,
     'dov' : $scope.pno,
     'sym' : $scope.email,
     'age' : $scope.age,
     'msg' : $scope.msg

     };

     var config = {
     headers : {
     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
     }
     }

     var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
     req.success(function(data, status, headers, config) {
     $scope.message = data;
     console.log(data);
     });
     req.error(function(data, status, headers, config) {
     alert( "failure message: " + JSON.stringify({data: data}));
     });
     };*/
});
