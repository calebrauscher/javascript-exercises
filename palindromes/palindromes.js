const palindromes = function(str) {
	let word = str.replace(/\W/gi,'').toLowerCase();

	if (word.length < 2) {
		return true;
	}
	
	if (word.slice(0,1) == word.slice(-1)) {
		return palindromes(word.slice(1,-1))
	}
	
	return false;

}

module.exports = palindromes
