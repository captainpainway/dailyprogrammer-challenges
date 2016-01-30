function getNumber() {
	var number = document.getElementById("value").value;

	console.log(number);

	document.getElementById("original").innerHTML = number;

	function dottieNum(value) {

		if (number != null) {
			for(var i = 0; i < 100; i++) {
				number = Math.cos(number);
			}

		document.getElementById("result").innerHTML = number;
		}
	}

	dottieNum(value);
}