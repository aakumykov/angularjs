var app = angular.module("myShoppingList", ["ngRoute"]);

app.controller("myCtrl", function($scope, $http) {
	$scope.products = ["Debian", "Mandriva", "Ubuntu"];
	$scope.msgText = "";
	$scope.msgColor = "";

	$scope.qwerty = 'qwerty из контроллера'
	$scope.qwerty2 = 'qwerty2 из контроллера'

	$scope.addItem = function(){
		//alert($scope.newDistro);
		var d = $scope.newDistro;
		if (!d) { 
			alert('ничё нет');
			return; 
		}
		if (-1 == $scope.products.indexOf(d) ) {
			$scope.products.push(d);
			$scope.msgText = "Элемент " + d + " добавлен"
			$scope.msgColor = "green";
			$scope.newDistro = "";
		} else {
			$scope.msgText = "Элемент " + d + " уже есть"
			$scope.msgColor = "red";
		}
		
	};

	$scope.removeItem = function(item) {
		var name = $scope.products[item];
		if ( $scope.products.splice(item,1) ) {
			$scope.msgText = "Элемент '" + name + "'' удалён"
			$scope.msgColor = "green";
		} else {
			$scope.msgText = "Ошибка удаления '" + name + "'"
			$scope.msgColor = "red";
		}
	}

	$scope.postNewEntry = function(){
		alert($scope);
		// $http.post('127.0.0.1', {
		// 	title: $scope.newEntryTitle,
		// 	body: newEntryBody
		// });
	};

	$scope.testQwerty = function(){
		alert('testQwerty: '+$scope.qwerty);
	};
});

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: 'main.html',
		controller: 'myCtrl'
	})
	.when("/add",{
		templateUrl: 'add.html',
		controller: 'myCtrl'
	})
	.when("/list",{
		templateUrl: "list.html",
		controller: 'myCtrl'
	})
	.otherwise({
		templateUrl: "main.html",
		controller: 'myCtrl'
	});
});


