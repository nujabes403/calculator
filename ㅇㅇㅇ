angular.module("calApp",[])
	.controller("calCtrl",function ($scope,$rootScope){

		$scope.calArr1 = [1,2,3];
		$scope.calArr2 = [4,5,6];
		$scope.calArr3 = [7,8,9];
			
		$scope.inputBar = new Array();
		$scope.inputBarResult;
		$scope.operators = ['+','-','*','/','(',')'];
		

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
			$rootScope.$broadcast("calculateFinished",{
				expression:$scope.inputBarResult,
				result:$scope.result
			});
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

		// $scope.$on("clickedHistory",function (event,expression){
		// 	$scope.inputBar = expression.split('');
		// 	$scope.inputBarResult = expression;
		// });
	
	})
	.controller('historyCtrl', function ($scope,$rootScope) {
		
		$scope.histories = [];

		$scope.$on("calculateFinished",function (event,calData){
			$scope.histories.push({expression:calData.expression,result:calData.result});
			});

		// $scope.upHistory = function (expression){
		// 	$rootScope.$broadcast("clickedHistory", {
		// 		expression:expression
		// 	});

		// };

		$scope.removeHistory = function (){
			$scope.histories = [];
		};
	});
