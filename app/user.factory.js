(function(){
	angular.module('user')
	.factory('User',UserFactory);

	UserFactory.$inject = [];
	function UserFactory(){
		var users = [
			{id:1,name:'abel'}
		];

		var service = {
			add:add,
			all:all,
			remove:remove
		};
		
		function add(){
			users.push({id:1,name:'test'});
		}

		function remove(userId){
		
			for(var x in users){
				if(users[x].id == userId ){
					var user = users[x];
					users.splice(x,1);
					return user;
				}
			}

		};

		function all(){
			return users;
		}

		return service;
	}

})();