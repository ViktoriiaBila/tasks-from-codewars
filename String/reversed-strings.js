var str = 'hello';
var strNew = '';
var i = str.length - 1;

while (i >= 0) {
	strNew += str[i];
	i--;
}
console.log(strNew);