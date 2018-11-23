const caesar = function(str, shift) {
	let coded = ''
	if (shift < 0)
	{
		shift = 26 + shift;
	}
	
	for (let i = 0; i < str.length; i++)
	{
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
      {
        coded += String.fromCharCode((str.charCodeAt(i) + shift - 65) % 26 + 65);
      }
      else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
      {
        coded += String.fromCharCode((str.charCodeAt(i) + shift -97 ) % 26 + 97);
      }
      else
        {
          coded += String.fromCharCode(str.charCodeAt(i));
        }
	}
  
  return coded;

}

module.exports = caesar
