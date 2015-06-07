var persBio = angular.module('persBio');

persBio.controller('mainCtrl', function($scope){

$scope.naviCollapse = function(){

	$scope.navbarCollapsed = !$scope.navbarCollapsed;
}

/*$scope.navbarOptions = {
	color:'inverse',
	position:'fixed-top'
};*/

});