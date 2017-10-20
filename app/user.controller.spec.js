describe('User controller',function(){

	beforeEach(angular.mock.module('user'));
	beforeEach(inject(function($injector){
		this.$controller = $injector.get('$controller');
		this.user = $injector.get('User');
		spyOn(this.user,'all').and.callThrough(); 
		this.UserController = this.$controller('UserController');
		this.UserController.$onInit();
	}));

	it('should be define UserController',function(){
		expect(this.UserController).toBeDefined();
	});

	describe('.$onInit()',function(){
		it('should have an array of users',function(){
			expect(this.UserController.users.length).toBeDefined();
		});

		it('should call User.all()',function(){
			expect(this.user.all).toHaveBeenCalled();
		});
	});
});