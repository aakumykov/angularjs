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
		//tempalte: "<h1>Начальная страница</h1>"
		tempalteUrl: 'main.html'
	})
	.when("/add",{
		//tempalte: "<h2>добавки мне</h2>"
		tempalteUrl: 'add.html'
	})
	.when("/list",{
		tempalteUrl: "list.html"
	})
	.otherwise({
		tempalteUrl: "main.html"
	});
});

// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm",
//     })
//     .when("/london", {
//         templateUrl : "london.htm",
//         controller : "londonCtrl"
//     })
//     .when("/paris", {
//         templateUrl : "paris.htm",
//         controller : "parisCtrl"
//     });
// });