const input = document.querySelector('input');

const ruleLength8 = document.querySelector('#rule-length-8');
const ruleCapital = document.querySelector('#rule-capital');
const ruleNumber = document.querySelector('#rule-number');
const ruleChar = document.querySelector('#rule-char');

input.addEventListener('keyup', () => {
	const curPass = input.value.trim();
	//remove previous class whichever it was
	input.classList.remove('valid-password', 'invalid-password');

	//check all rules
	const isAllValid =
		check(curPass, /.{8,}/, ruleLength8) &
		check(curPass, /[A-Z]/, ruleCapital) &
		check(curPass, /[0-9]/, ruleNumber) &
		check(curPass, /[!?@#$%&()=+;',.<>]/, ruleChar);

	//add resulting class to input
	input.classList.add(isAllValid ? 'valid-password' : 'invalid-password');
});

function check(inp, pattern, ruleEl) {
	//remove old class whichever it was
	ruleEl.classList.remove('valid-rule', 'invalid-rule');

	//check
	let isCorrect = pattern.test(inp);

	//add new class
	ruleEl.classList.add(isCorrect ? 'valid-rule' : 'invalid-rule');

	return isCorrect;
}

// MORE VERBOUS APPROACH:
// function checkLength(inp){
//   //remove old classes
//   ruleLength8.classList.remove('valid-rule', 'invalid-rule');

//   //check
//   // let isCorrect = (inp.length >= 8) ? true : false;
//   const pattern = /.{8,}/;
//   let isCorrect = (inp.search(pattern) != -1) ? true : false;

//   //add new class
//   ruleLength8.classList.add(isCorrect ? 'valid-rule' : 'invalid-rule');

//   return isCorrect;
// }

// function checkCapital(inp){
//   //remove old classes
//   ruleCapital.classList.remove('valid-rule', 'invalid-rule');

//   //check
//   const pattern = /[A-Z]/;
//   let isCorrect = (inp.search(pattern) != -1) ? true : false;

//   //add new class
//   ruleCapital.classList.add(isCorrect ? 'valid-rule' : 'invalid-rule');

//   return isCorrect;
// }

// function checkNumber(inp){
//    //remove old classes
//   ruleNumber.classList.remove('valid-rule', 'invalid-rule');

//   //check
//   const pattern = /[0-9]/;
//   let isCorrect = (inp.search(pattern) != -1) ? true : false;
//   console.log(isCorrect);

//   //add new class
//   ruleNumber.classList.add(isCorrect ? 'valid-rule' : 'invalid-rule');

//   return isCorrect;
// }

// function checkChar(inp){
//   //remove old classes
//   ruleChar.classList.remove('valid-rule', 'invalid-rule');

//   //check
//   const pattern = /[!?@#$%&()=+;',.<>]/;
//   let isCorrect = (inp.search(pattern) != -1) ? true : false;
//   console.log(isCorrect);

//   //add new class
//   ruleChar.classList.add(isCorrect ? 'valid-rule' : 'invalid-rule');

//   return isCorrect;
// }
