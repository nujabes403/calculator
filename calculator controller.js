angular.module("calApp",[])
	.controller("calCtrl",function ($scope){

		$scope.calArr1 = [1,2,3];
		$scope.calArr2 = [4,5,6];
		$scope.calArr3 = [7,8,9];
			
		$scope.inputBar = new Array();
		$scope.inputBarResult;
		$scope.operators = ['+','-','*','/','(',')'];
		$scope.histories = [];

		// Main Logic
		$scope.inputToCal = function (input){

			if($scope.inputBar.length==0 && input == 0){
					alert("You can't input 0 first");
					return;
				}
				$scope.inputBar.push(input);
				$scope.inputBarResult = $scope.inputBar.join("");
			};
	
		$scope.calculate = function (){
			$scope.result = eval($scope.inputBarResult);
			$scope.history($scope.inputBarResult,$scope.result);
		};

		$scope.erase = function(){
				$scope.inputBar.pop();
				$scope.inputBarResult = $scope.inputBar.join("");
			};

		$scope.allReset = function (){
				$scope.inputBarReset();
			};

		$scope.inputBarReset = function (){
				$scope.inputBar = new Array();
				$scope.inputBarResult = 0;
			};


		// History Logic
		$scope.history = function (expression,result){
			$scope.histories.push({expression:expression,result:result});
		};

		$scope.upHistory = function (expression){
			$scope.inputBar = expression.split('');
			$scope.inputBarResult = expression;
		};

		$scope.removeHistory = function (){
			$scope.histories = [];
		};
	
	});
