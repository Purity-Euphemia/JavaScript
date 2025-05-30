function ATMCard(array){

let mastercard = {
		valid: true,
		issuer: "Mastercard",
		};

let discover = {
		valid: true,
		issuer: "discover",
	
		};

let AmericaExpress = {
		valid: true,
		issuer: "America Express",
			
		};
let visa =  {
	valid: true,
	issuer: "visa",
	
		};



if (array[0] == 5 && array.length == 16)return mastercard;

if (array[0] == 6 && array.length == 16)return discover;

if (array[0] == 3 && array.length == 16)return AmericaExpress;

if (array[0] == 4 && array.length == 16)return visa;


}


two = [5, 5, 6, 7, 8, 9, 2, 3, 7, 3, 5, 1, 9, 4, 2, 7];
three = [6, 5, 6, 7, 8, 9, 2, 3, 7, 3, 5, 1, 9, 4, 2, 7];
four = [3, 5, 6, 7, 8, 9, 2, 3, 7, 3, 5, 1, 9, 4, 2, 7];
five = [4, 5, 6, 7, 8, 9, 2, 3, 7, 3, 5, 1, 9, 4, 2, 7];

let result = ATMCard(five);
console.log (result);

