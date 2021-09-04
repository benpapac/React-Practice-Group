/// class repo link: https://git.generalassemb.ly/SEIR-809/callback-array-methods-lab///


const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];




listMinions(minions);


let capitalizedMinions = capNames(minions);
/* THIS IS THE SAME:   minions.map(capNames);
   THIS IS ALSO THE SAME: 
   let newArray=  minions.map(element=>{
         if (element === 'kevin') {return element};
         let newName = element[0].toUpperCase() + element.substring(1);
		 return newName;
    	});
		 return newArray;
//  } */
console.log(capitalizedMinions);


/* In order to check whether or not that previous map worked, Gru wants to try using the every method instead. So, using every, check whether or not every minion in capitalizedMinions are actually capitalized.

Create a function called isCapitalized that accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized

Now using both the every method and the isCapitalized method you just wrote, check whether or not all the capitalizedMinions are capitalized */

console.log(capitalizedMinions.every(isCaptialized) ? `We're capped!` : 'KEVIINNN!');

function listMinions(array) {
    array.forEach(element => {
    console.log((element));
    });
}

function capNames(array){
   let newArray=  array.map(element=>{
        if (element === 'kevin') {return element};
        let newName = element[0].toUpperCase() + element.substring(1);
		return newName;
        });
	return newArray;
}

function isCaptialized (minion) {return minion[0] === minion[0].toUpperCase()};


/*Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filter method to filter out the sneaky minion who didn't get capitalized.

Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

THEN Use every again, but this time on your new actuallyCapitalizedMinions array, to check if they're all capitalized now */

const actuallyCapitalizedMinions = capitalizedMinions.filter(isCaptialized);
console.log(actuallyCapitalizedMinions);
console.log(actuallyCapitalizedMinions.every(isCaptialized) ? `We're capped!` : 'KEVIINNN!');



/* Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the find method.

Using find, find which minion is not correctly capitalized in the original capitalizedMinions array and save it to a variable called uncapitalizedMinion, then console log it */

function uncapitalizedMinion() {
	let unCappedMinion = capitalizedMinions.find(element => {
	if (!isCaptialized(element)) return element;
	});
	return unCappedMinion;
}
console.log(uncapitalizedMinion);

/* Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later. */

function targetMinion(){
let datIndex = capitalizedMinions.findIndex(element => element === uncapitalizedMinion());
console.log(targetMinion);
return datIndex;
}

/* Now that he's found him, he can just use capitalizedMinions[1] to select kevin and capitalize his name.
Delete the second occurence of 'kevin'.
Once that's done, check again using every whether or not capitalizedMinions is all capitalized correctly */

function capNSliceKevin(array) {
	let kevinnnnn = uncapitalizedMinion();
	const kevinCapIndex = targetMinion();
	array.splice(kevinCapIndex, 1, (kevinnnnn[0].toUpperCase() + kevinnnnn.slice(1)));

	kevinnnnn = uncapitalizedMinion();
	let kevinDismissalIndex = targetMinion();
	array.splice(kevinDismissalIndex, 1);
	// array.splice(where, how much to delete, add-in value)
}

capNSliceKevin(capitalizedMinions);
console.log(capitalizedMinions);
