(function(){

	angular.module('user')
		.controller('UserController',UserController);

		UserController.$inject = ['User'];

		function UserController(User){
			var vm = this;
			vm.$onInit = function(){
				vm.users = User.all();	
			}; 			
		}

})();