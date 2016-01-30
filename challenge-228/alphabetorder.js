function sendWords() {
	document.getElementById("txtoutput").innerHTML = "";

	var words = document.getElementById("txtinput").value.split('\n');

	function sorter(words) {

		for (i = 0; i < words.length; i++) {
			var letters = words[i].split("").slice().sort();
			var reverse = letters.slice().reverse();
			letters = letters.join("");
			reverse = reverse.join("");
			if (letters === words[i]) {
				document.getElementById("txtoutput").innerHTML += words[i] + " IN ORDER" + "\n"
			} else if (reverse === words[i]) {
				document.getElementById("txtoutput").innerHTML += words[i] + " REVERSE ORDER" + "\n"
			} else {
				document.getElementById("txtoutput").innerHTML += words[i] + " NOT IN ORDER" + "\n"
			}
		}
	}

	sorter(words);
}