const reverseString = function(string) {
	splitString = string.split('');
	let reverse = splitString.reverse();
	let joinArray = reverse.join('');
	return joinArray;
}

module.exports = reverseString
