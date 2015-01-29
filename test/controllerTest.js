describe("Cal test Controller Tests",function (){

	var CalTestController,scope;

	beforeEach(module("calApp"));

	beforeEach(inject(function($controller,$rootScope){
		scope = $rootScope.$new();

		CalTestController = $controller("calCtrl",{
			$scope:scope
		});
	}));

	// var a;
	// it('eval',inject(function(){
	// 	a="3+5*4";
	// 	expect(scope.eval(a)).toEqual(23);
	// }));

	it('scope.inputToCal',inject(function(){
		scope.inputToCal(5);
		expect(scope.inputBarResult).toEqual("5");
	}))
});