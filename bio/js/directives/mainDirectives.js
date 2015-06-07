var persBio = angular.module('persBio', ['ui.bootstrap', 'ui.router']);

persBio.directive('bootstrapNavbar', function(){
  return {
		restrict:'AE',
		replace:true,
		templateUrl: '/template/navbar.html',
		scope:{
			
		}
	};
});

/*app.directive('bootstrapMenuitem',function(){
  return {
    restrict:'EA',
    replace:true,
    templateUrl:'bootstrap-menuItem.html',
    scope:{
      item:"="
    }
  }
});*/