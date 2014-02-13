/* NOTE: currently the only customizable thing is length */
/* NOTE: there is an off-by-one error somewhere affecting password length */

/* createPass:     N/A --> String
 *  - generate a password based on the user's inputs
 */
function createPass() 
{
	var min = document.getElementById("min").value;
	var max = document.getElementById("max").value;
	
	
	// test that min and max are valid
	if (notValidRange(min, max)) 
	{
		//edit the page "Min and Max should be numeric"
		alert("Min and Max must be integers > 0");
	}
	
	min = new Number(min);
	max = new Number(max);
	
	var length = randomNumber(min, max);
	
	//var source = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789"
	var p = "";
	
	while (p.length <= length) {
		p = p.concat(chooseNext()); 
	}
	
	p = p.substr(0, (length + 1));

	// hide the form and display p
	document.getElementById("CustomPass").display = "none";
	document.getElementById("pass").innerHTML = "<p>" + p + "</p>";
		
}




/* NOTE: currently does not support special characters */

/* chooseChar: N/A --> String[length 1]
 *  - chooses the next piece to be added to the password
 */
function chooseNext() {
	// create "groups"
	var upper = new Array(65, 90);
	var lower = new Array(97, 122);
	var number = new Array(48, 57);
	
	var groups = new Array(upper, lower, number);
	
	// pick a "group" using a random Number
	var groupint = randomNumber(0, 2);
	var group = groups[groupint];
	
	// pick the member of the group using a random number
	return String.fromCharCode(randomNumber(group[0], group[1]));
}

/* randomNumber: NaturalNumber NaturalNumber --> NaturalNumber
 *  - picks an integer x min <= x <= max (AKA min and max included)
 */
function randomNumber(min, max) {
	return (Math.floor((Math.random() * (1 + (max - min)))) + min);
}

/* notValidRange: ?? ?? --> Boolean
 *  - are min & max not positive numbers or is max < min?
 *  - AKA will return TRUE when the inputs are NOT a valid range
 */
function notValidRange(min, max) {
	var ans = false;
	
	var minn = new Number(min);
	var maxn = new Number(max);
	
	if( isNotDigit(min) || isNotDigit(max) || minn < 0 || maxn < minn) {
		ans = true;
	}
	
	return ans;
}

/* isNotDigit: String --> boolean
 *  - is x not a string representation of a number?
 */
function isNotDigit(x) {
	ans = false;
	var charint;
	
	for (var i = 0; i < x.length; i++) {
		charint = x.charCodeAt(i);
		
		if(charint < 48 || charint > 57 ) {
			ans = true;
		}
	}
	return ans;
}