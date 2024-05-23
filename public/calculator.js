angular.module('calculatorApp', [])
    .controller('CalculatorController', ['$http', function($http) {
        var self = this;
        self.firstOperand = 0;
        self.secondOperand = 0;
        self.operator = '+';
        self.answer = '';

        self.calculate = function() {
            $http.get('/calculate', {
                params: {
                    first: self.firstOperand,
                    second: self.secondOperand,
                    operator: self.operator
                }
            }).then(function(response) {
                if (response.data.result !== undefined) {
                    self.answer = response.data.result;
                } else {
                    self.answer = 'Error: ' + response.data.error;
                }
            }).catch(function(error) {
                console.error('Error occurred while calculating:', error);
                self.answer = 'Error occurred while calculating';
            });
        };
    }]);
