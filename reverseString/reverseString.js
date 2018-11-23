const reverseString = function(str) {
	let splitString = str.split('');
	let revArr = splitString.reverse();
	return revArr.join('');
}

module.exports = reverseString
