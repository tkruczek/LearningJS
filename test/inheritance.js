TestCase('PseudoClassicalInheritance', {
	'test sphere and circle' : function() {
		function Circle (radius) {
			this.radius = radius;
		}
		(function(p) {
			p.diameter = function() {
				return this.radius * 2;
			};
			p.circumference = function() {
				return this.diameter() * Math.PI;
			};
			p.area = function() {
				return this.radius * this.radius * Math.PI;
			};
		}(Circle.prototype));
		function Sphere(radius) {
			this.radius = radius;
		}
		Sphere.prototype = (function() {
			function F () {	}
			F.prototype = Circle.prototype;
			
			return new F();
		}());
		
		Sphere.prototype.constructor = Sphere;
	},
	'test this on prototype' : function() {
		function A(){
			this.x = 'a';
		}
		A.prototype.getX = function() {
			return this.x;
		}
		function B () {
			this.x = 'b';
		} 
		B.prototype = new A();
		B.prototype.constructor = B;
		var b = new B();
		assertEquals('a', b.getX());
	}
});
