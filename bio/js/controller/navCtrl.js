var persBio = angular.module('persBio');

persBio.controller('navCtrl', function($scope) {

/*(function(){

	var navbarCollapsed = $scope.navbarCollapsed;
	return (!navbarCollapsed) ? = true : false;

})();*/


$scope.navCollapse = function(){
	$scope.navbarCollapsed = !$scope.navbarCollapsed;
	

}


});
