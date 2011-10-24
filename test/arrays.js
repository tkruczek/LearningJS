TestCase('ArrayTest', {
	'test array splice should modify array' : function() {
		var arr = [1, 2, 3, 4, 5];
		var result = arr.splice(2, 3);
		assertEquals([1, 2], arr);
	}
});
if (typeof Array.prototype.sum == 'undefined') {
	Array.prototype.sum = function(){
		
	}
}
TestCase('ArrayLoopTest', {
	'test looping should iterate over all items':	function() {
		var array = [1, 2, 3, 4, 5, 6];
		var result = [];
		
		//Standard for-loop
		for (var i = 0, l = array.length; i < l; i++) {
			result.push(array[i]);
		}
		
		assertEquals('123456', result.join(''));
	},
	'test for-in loop should iterate over all items': function() {
		var array = [1, 2, 3, 4, 5, 6];
		var result = [];
		
		for (var i in array) {
			result.push(array[i]);
		}
		assertEquals('123456', result.join(''));
	}
});

TestCase('ForInTest', {
	'test looping should show no items in IE': function() {
		var dontEnumProps = ['call', 'apply', 'prototype'];
		var f = function() {};
		for (var i = 0, l = dontEnumProps.length; i < l; i++) {
			f[dontEnumProps[i]] = true;
		}
		var count = 0;
		for (var prop in f) {
			count++;
		}
		assertEquals(0, count);
	}
});
TestCase('PrototypeTest', {
	'test object prototype should be Function prototype': function(){
		function Circle (radius) {
			this.radius = radius;
		}
		var c = new Circle(5);
		assertEquals(Object.prototype, c.__proto__);
	} 
});

