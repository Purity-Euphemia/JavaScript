function outerFun(a) {
	function innerFun(b) {
	return a + b;
	}
	
	return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));