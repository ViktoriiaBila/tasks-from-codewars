function isPalindrome(line) {
	var arrayLen = String(line).split('');
	for (i = 0; i < Math.floor(String(line).length / 2); i++) {
		if (arrayLen[i] != arrayLen[String(line).length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome(123456));