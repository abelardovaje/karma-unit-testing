describe('user factory',function(){

	beforeEach(angular.mock.module('user'));
	beforeEach(inject(function($injector){
		this.user = $injector.get('User');
		this.users = [
			{id:1,name:'abel'}
		];
	}));

	it('should be defined',function(){
		expect(this.user).toBeDefined();
	});

	describe('.add(user)',function(){



		it('should be function',function(){
			expect(typeof this.user.add === 'function').toBe(true);
		});

		it('should be add a user',function(){
			expect(this.user.all().length).toBe(1);
			this.user.add({id:2,name:'test'});
			expect(this.user.all().length).toBe(2);
		});

	});

	describe('.all()',function(){

		beforeEach(function(){
			this.returnedUsers = this.user.all(); 
		});

		it('should be a function',function(){
			expect(typeof this.user.all === 'function').toBe(true);
		});

		it('should be return if array with length',function(){
			var length = this.returnedUsers.length; 
			expect(length).toBeDefined();
			expect(length).toBe(1);
		});

		it('should return an array of users',function(){
			var users = this.returnedUsers;
			expect(typeof users[0] === 'object').toBe(true);
			expect(users[0].id).toEqual(1);
			expect(users[0].name).toEqual('abel');
		});

	});

	describe('.remove(userId)',function(){
		it('should be remove a user',function(){
			expect(this.user.all().length).toBe(1);
			this.user.remove(1);
			expect(this.user.all().length).toBe(0);
		});

		it('should really remove user with id of 1',function(){
			var user =  this.user.remove(1);
			expect(user.id).toBe(1);
		});

	});



});