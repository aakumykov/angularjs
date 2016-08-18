var app = angular.module("myShoppingList", ["ngRoute"]);

app.controller("myCtrl", function($scope) {
	$scope.products = ["Debian", "Mandriva", "Ubuntu"];
	$scope.msgText = "";
	$scope.msgColor = "";

	$scope.addItem = function(){
		var d = $scope.newDistro;
		if (!d) { return; }
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
});

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: 'main.html',
		controller: 'mainCtrl'
	})
	.when("/add",{
		templateUrl: 'add.html'
	})
	.when("/list",{
		templateUrl: "list.html",
		controller: 'myCtrl'
	})
	.otherwise({
		templateUrl: "main.html"
	});
});

app.controller('mainCtrl', function($scope){
	$scope.title = 'Глагне';
});
