angular.module('dreamophone.controllers', [])

	.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate, Dreams) {
		$scope.moreDreamsAvailable = true;
		$scope.page = 1;
		$scope.dreams = [];

		$scope.openMenu = function () {
			$ionicSideMenuDelegate.toggleLeft();
		};

		$scope.nextPage = function(){

			var dreamsQuery = Dreams.query(
				{ page: $scope.page },
				function(){
					var page = parseInt( dreamsQuery.page.number ),
						pageSize = parseInt( dreamsQuery.page.size ),
						total = parseInt( dreamsQuery.total );

					$scope.dreams = $scope.dreams.concat( dreamsQuery.items );
					
					// check if results are final
					if( page * pageSize >= total ){
						$scope.moreDreamsAvailable = false;

					// set the page as the next one, for the next call
					} else {
						$scope.page = parseInt(dreamsQuery.page.number) + 1;
					}

					$scope.$broadcast('scroll.infiniteScrollComplete');
				}
			);
		};
	})

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