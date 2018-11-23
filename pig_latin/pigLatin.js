function translate(str) {
	let splitStr = str.split(' ');
	let pigLatin = [];
	let regex = /[aeiou]/gi;
	let quReg = /qu/gi;
	
	splitStr.forEach(function(word) {
		if (word[0].match(regex)) {
			word = word + 'ay';
		} else if (word.match(regex) === null) {
			word = word +'ay';
		} else if (word.match(quReg)) {
			let qIndex = word.indexOf('qu');
			word = word.substr(qIndex+2) + word.substr(0,qIndex+2) + 'ay';
		} else {
				let vowelIndex = word.indexOf(word.match(regex)[0]);
				word = word.substr(vowelIndex) + word.substr(0, vowelIndex) + 'ay';
		}
      pigLatin.push(word);
		
      
	});
	
	return pigLatin.join(' ');
}


module.exports = {
	translate
}

