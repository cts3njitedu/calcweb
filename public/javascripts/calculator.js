var app = angular.module('CalcApp', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.expression = "";
    $scope.prevExpression = "";

    $scope.currAnswer = "";

    $scope.answerValue = function () {
        if ($scope.currAnswer.length === 0) {
            $scope.currAnswer = "0";
        }
        $scope.expression = $scope.expression + "ANS";
    }
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

        var expr = $scope.expression.replace(/ANS/g, $scope.currAnswer);
        var result = {

            expression: expr
        }
        $http.post('/calc', result, {

            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json'


            }



        }).then(function (response) {


            $scope.prevExpression = expr;
            $scope.expression = response.data.result;
            $scope.currAnswer = $scope.expression;
            console.log(response.data);
        }, function (error) {


        })

    }

});
