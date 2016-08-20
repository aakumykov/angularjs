var app = angular.module("myShoppingList", ["ngRoute"]);

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

app.controller("myCtrl", function($scope, $http) {
	$scope.products = ["Debian", "Mandriva", "Ubuntu"];
	$scope.msgText = "";
	$scope.msgColor = "";

	$scope.siteAddress = 'http://127.0.0.1';

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

	$scope.testHttp = function(){
		var address = $scope.siteAddress;

		$http({
			method: 'GET',
			url: address,
		}).then(
			function successCallback(response) {
				$scope.httpStatusCode = response.status;
				$scope.httpStatusText = response.statusText;
				$scope.httpHeaders = response.headers['Referer'];
				$scope.httpConfig = response.config;
				$scope.httpData = typeof(response.data);
			}, 
			function errorCallback(response) {
				
			}
		);
	};
});

