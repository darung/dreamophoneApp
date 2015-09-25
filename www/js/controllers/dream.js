angular.module('dreamophone.controllers')

	.controller('DreamDetailCtrl', function($scope, $state, $ionicSideMenuDelegate, Dreams) {
		$scope.dream = {};

		$scope.openMenu = function () {
			$ionicSideMenuDelegate.toggleLeft();
		};

		var dreamQuery = Dreams.query(
			{ id: $state.params.dreamId },
			function(){
				$scope.dream = dreamQuery.item;
			}
		);
	});	