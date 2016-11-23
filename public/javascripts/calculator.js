var app = angular.module('CalcApp', []);
app.controller('myCtrl', function ($scope,$http) {
    $scope.expression = "";

    $scope.updateExpression = function (element) {

        $scope.expression = $scope.expression + element.target.value;

        console.log(element.target.value);

    }
    $scope.backExpression = function () {

        $scope.expression = $scope.expression.substr(0, $scope.expression.length - 1);
        console.log($scope.expression);
    }

    $scope.clearExpression = function () {

        $scope.expression = "";
    }
    $scope.sendExpression = function () {
        var result = {

            expression: $scope.expression
        }
        $http.post('/calc', result, {

            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json'


            }



        }).then(function (response) {
            

            $scope.expression = response.data.result;
            console.log(response.data);
        },function(error){
            

        })

    }

});
